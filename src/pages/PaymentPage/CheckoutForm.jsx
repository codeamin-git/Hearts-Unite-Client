import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import { ImSpinner9 } from 'react-icons/im';
import { useParams } from "react-router-dom";

import './CheckoutForm.css';
import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
const [cardError, setCardError]=useState('')
const [processing, setProcessing] = useState(false)
  useEffect(()=>{
    // fetch client secret
    getClientSecret({price: 5})
  }, [])

  const getClientSecret = async (price) => {
    const {data} = await axiosSecure.post('/create-payment-intent', price)
   console.log(data);
    setClientSecret(data.clientSecret)
  }

  const {user, loading} = useAuth();
  const params = useParams()
  const axiosSecure = useAxiosSecure()
  const {data: biodata = '', refetch, isLoading} = useQuery({
      queryKey: ['biodataId'],
      queryFn: async () => {
          const {data} = await axiosSecure(`/checkout/${params.biodataId}`)
          return data
      }
      })
  console.log(biodata);


  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    setProcessing(true)

    // biodata info TODO ****************
    const form = event.target;
    const biodataId = form.biodataId.value;
    const requesterEmail = form.email.value;
    console.log(biodataId, requesterEmail);

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCardError(error.message)
      setProcessing(false)
      return
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setCardError('')
    }

    // confirm payment
    const {error: confirmError, paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
        payment_method:{
            card: card,
            billing_details:{
                email: user?.email,
                name: user?.displayName,
            },
        }
    })
    if(confirmError){
        console.log(confirmError);
        setCardError(confirmError.message)
        setProcessing(false)
        return
    }

    if(paymentIntent.status === 'succeeded'){
        // 1. create payment info object
        // 2. save payment info in request collection
    }

    setProcessing(false)
  };

  if(loading || isLoading) return <LoadingSpinner />

  return (
    <>
    <form onSubmit={handleSubmit}>
        {/* biodata id */}
        <div className="mb-4">
                    <label htmlFor="biodataId" className="block text-gray-700 font-bold mb-2">Biodata Id</label>
                    <input required type="text" id='biodataId' name='biodataId'
                    defaultValue={biodata.biodataId} readOnly className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"/>
                </div>
            {/* user email */}
             <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Your Email</label>
                    <input required type="text" id='email' name='email' defaultValue={user?.email}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"/>
                </div>

        {/* checkout form */}
        <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />

      <Button type="submit" disabled={!stripe || !clientSecret || processing} gradientMonochrome="lime">
        {processing ? <ImSpinner9 className='animate-spin m-auto'/>: 'Pay $5'}
        </Button>
    </form>
    {cardError && <p className='text-red-500'>{cardError}</p>}
    </>
  );
};

export default CheckoutForm;