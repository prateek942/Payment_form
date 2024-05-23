import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Switch } from '@headlessui/react';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phoneNumber: '',
    message: '',
    agreed: false,
    mobileNumber: '',
    address: '',
    cardNumber: '',
    cvv: '',
    expiryMonth: '',
    expiryYear: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({ ...errors, [name]: undefined });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const validateStep1 = () => {
    // Add validation logic here
    return formData.email && formData.phoneNumber;
  };

  const validateStep2 = () => {
    // Add validation logic here
    return formData.cardNumber.length === 16 && formData.cvv.length === 3;
  };

  const renderStep = () => {
    switch (step) {
        case 1:
            return (
                <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
                  <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Detail</h2>
                  </div>
                  <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            placeholder="Input email"
                            required
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative mt-2.5">
                          <input
                            type="tel"
                            name="phoneNumber"
                            id="phone-number"
                            autoComplete="tel"
                            placeholder="Input phone number"
                            required
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    <div className="sm:col-span-2">
                      <div className="flex items-center">
                        <Switch
                          checked={formData.agreed}
                          onChange={(value) => setFormData({ ...formData, agreed: value })}
                          className={classNames(
                            formData.agreed ? 'bg-indigo-600' : 'bg-gray-200',
                            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                          )}
                        >
                          <span className="sr-only">Receive text message updates</span>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              formData.agreed ? 'translate-x-5' : 'translate-x-0',
                              'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                            )}
                          />
                        </Switch>
                        <span className="ml-3 text-sm text-gray-600">Receive text message updates about your booking. Message rates may apply.</span>
                      </div>
                    </div>
                  </div>
          
                  <div className="mt-10">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Traveler Detail</h2>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-6">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                          First Name
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="firstName"
                            id="first-name"
                            autoComplete="given-name"
                            placeholder="Input first name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={formData.firstName}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                          Last Name
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="lastName"
                            id="last-name"
                            autoComplete="family-name"
                            placeholder="Input last name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={formData.lastName}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="address" className="block text-sm font-semibold leading-6 text-gray-900">
                          Address
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="address"
                            id="address"
                            placeholder="Input your address"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={formData.address}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
          
                    <div className="mt-10">
                      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Promo Code</h2>
                      <div className="mt-6 flex items-center">
                        <input
                          type="text"
                          name="promoCode"
                          id="promo-code"
                          placeholder="Input promo code"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          value={formData.promoCode}
                          onChange={handleInputChange}
                        />
                        <button
                          type="button"
                          className="ml-4 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Find promo code?
                        </button>
                        </div>
          </div>

          <div className="mt-10">
            <button
              type="button"
              onClick={nextStep}
              disabled={!validateStep1()}
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );

case 2:
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Complete Your Purchase</h2>
        <p className="text-gray-600 mb-4">14 day Money Back Guarantee</p>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Choose a payment method</h3>
          <div className="flex justify-center space-x-4">
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md">Credit card</button>
            {/* <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md">Paypal</button>
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md">Bank transfer</button> */}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Payment details</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="border border-gray-300 rounded-md px-3 py-2"
              value={formData.firstName || ''}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Last name"
              className="border border-gray-300 rounded-md px-3 py-2"
              value={formData.lastName || ''}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
            <input
  type="text"
  placeholder="Card number"
  className={formData.cardNumber?.length === 16
    ? "col-span-2 border border-gray-300 rounded-md px-3 py-2" // Valid state (default)
    : "col-span-2 border border-red-500 rounded-md px-3 py-2"} // Invalid state
  value={formData.cardNumber || ''}
  onChange={(e) => {
    // Limit input to 16 characters and update state
    const newValue = e.target.value.slice(0, 16);
    setFormData({ ...formData, cardNumber: newValue });
  }}
  // Set maxLength attribute for accessibility (optional)
  maxLength={16}
  // Set aria-invalid for screen readers
  aria-invalid={formData.cardNumber?.length !== 16}
  // Add indicator for invalid length
  aria-describedby={formData.cardNumber?.length !== 16 ? "card-number-error" : undefined}
/>
<span id="card-number-error" className="text-red-500 text-xs hidden" aria-live="polite">
  Please enter a valid card number (16 digits).
</span>
            <input
              type="text"
              placeholder="MM"
              className="border border-gray-300 rounded-md px-3 py-2"
              value={formData.expiryMonth || ''}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 2);
                setFormData({ ...formData, expiryMonth: value });
              }}
            />
            <input
              type="text"
              placeholder="YYYY"
              className="border border-gray-300 rounded-md px-3 py-2"
              value={formData.expiryYear || ''}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 4);
                setFormData({ ...formData, expiryYear: value ? parseInt(value) : '' });
              }}
            />
            <input
  type="text"
  placeholder="CVV"
  className={formData.cvv?.length === 3
    ? "border border-gray-300 rounded-md px-3 py-2" // Valid state (default)
    : "border border-red-500 rounded-md px-3 py-2"} // Invalid state
  value={formData.cvv || ''}
  onChange={(e) => {
    // Limit input to 3 characters and update state
    const newValue = e.target.value.slice(0, 3);
    setFormData({ ...formData, cvv: newValue });
  }}
  // Set maxLength attribute for accessibility (optional)
  maxLength={3}
  // Set aria-invalid for screen readers
  aria-invalid={formData.cvv?.length !== 3}
  // Add indicator for invalid length
  aria-describedby={formData.cvv?.length !== 3 ? "cvv-error" : undefined}
/>
<span id="cvv-error" className="text-red-500 text-xs hidden" aria-live="polite">
  Please enter 3 digits for CVV.
</span>

          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Order summary</h3>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${formData.subtotal ? formData.subtotal.toFixed(2) : '0.00'}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${formData.tax ? formData.tax.toFixed(2) : '0.00'}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${(formData.subtotal && formData.tax) ? (formData.subtotal + formData.tax).toFixed(2) : '0.00'}</span>
          </div>
        </div>

        <button
          className="bg-purple-600 text-white py-2 px-4 rounded-md w-full mb-4"
          onClick={() => {
            if (validateStep2()) {
              nextStep(); // Move to the next step
            } else {
              console.log('Please fill in all payment details correctly');
            }
          }}
        >
          Submit Purchase
        </button>
        <p className="text-green-600 mb-4">Safe & Secure Payment</p>
        <p className="text-gray-600 text-sm">
          By purchasing, you accept the Terms of Use and acknowledge reading the Privacy Policy. You also agree to auto
          renewal of your yearly subscription for US$90.00, which can be disabled at any time through your account. Your
          card details will be saved for future purchases and subscription renewals.
        </p>

        <div className="mt-4">
          <button onClick={prevStep} className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md">
            Back
          </button>
        </div>
      </div>
    </div>
  );

case 3:
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-green-600">Thank You for Shopping with Us!</h2>
            <p className="text-gray-600 px-4 py-2">Happy to have you on board.</p>
          </div>
        </div>
      );
default:
  return null;
}
};

return <div>{renderStep()}</div>;
};

export default MultiStepForm;