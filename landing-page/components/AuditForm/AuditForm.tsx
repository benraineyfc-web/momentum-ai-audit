'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormData, FormStep } from './types';
import { fullFormSchema } from './validation';
import ProgressBar from './ProgressBar';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';

export default function AuditForm() {
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>({
    resolver: zodResolver(fullFormSchema),
    mode: 'onBlur',
  });

  const formData = watch();

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => (prev + 1) as FormStep);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as FormStep);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // TODO: Send to Airtable via API
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Route based on priceFeeling
        switch (data.priceFeeling) {
          case 'no-problem':
            window.location.href = '/booking-confirmed';
            break;
          case 'seems-high':
            window.location.href = '/comparison';
            break;
          case 'too-expensive':
            window.location.href = '/value-calculator';
            break;
          case 'need-value':
            window.location.href = '/what-you-get';
            break;
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-20 px-4 bg-neutral-50">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <ProgressBar currentStep={currentStep} totalSteps={5} />

          <form onSubmit={handleSubmit(onSubmit)}>
            {currentStep === 1 && (
              <Step1
                register={register}
                errors={errors}
                onNext={nextStep}
              />
            )}
            {currentStep === 2 && (
              <Step2
                register={register}
                errors={errors}
                formData={formData}
                onNext={nextStep}
                onPrev={prevStep}
              />
            )}
            {currentStep === 3 && (
              <Step3
                register={register}
                errors={errors}
                onNext={nextStep}
                onPrev={prevStep}
              />
            )}
            {currentStep === 4 && (
              <Step4
                register={register}
                errors={errors}
                formData={formData}
                onNext={nextStep}
                onPrev={prevStep}
              />
            )}
            {currentStep === 5 && (
              <Step5
                register={register}
                errors={errors}
                isSubmitting={isSubmitting}
                onPrev={prevStep}
              />
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
