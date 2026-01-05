import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { QuoteFormData, QuoteSummary } from '../types/quote.types';
import { Button } from '../components/shared/Button';
import { StepIndicator } from '../components/quote/StepIndicator';
import { PriceBreakdown } from '../components/quote/PriceBreakdown';
import { Step1ProjectType } from '../components/quote/Step1ProjectType';
import { Step2Container } from '../components/quote/Step2Container';
import { Step3RentalDetails } from '../components/quote/Step3RentalDetails';
import { Step4MaterialType } from '../components/quote/Step4MaterialType';
import { Step5AdditionalServices } from '../components/quote/Step5AdditionalServices';
import { Step6CustomerInfo } from '../components/quote/Step6CustomerInfo';
import { useQuoteCalculator } from '../hooks/useQuoteCalculator';
import { useFormPersistence } from '../hooks/useFormPersistence';
import { getZoneByCity } from '../data/serviceAreas';
import { generateQuoteId } from '../utils/priceCalculations';

const steps = [
  { title: 'Project Type' },
  { title: 'Container' },
  { title: 'Details' },
  { title: 'Materials' },
  { title: 'Services' },
  { title: 'Contact' },
];

export const QuotePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<QuoteFormData>({
    defaultValues: {
      rentalDuration: 7,
      additionalServices: [],
      deliveryAddress: {
        state: 'TX',
      },
    },
  });

  useFormPersistence(watch, setValue);
  const priceBreakdown = useQuoteCalculator(watch);

  const city = watch('deliveryAddress.city');
  const zone = city ? getZoneByCity(city) : null;

  const validateCurrentStep = async () => {
    let fieldsToValidate: (keyof QuoteFormData)[] = [];

    switch (currentStep) {
      case 1:
        fieldsToValidate = ['projectType'];
        break;
      case 2:
        fieldsToValidate = ['containerSize'];
        break;
      case 3:
        fieldsToValidate = [
          'rentalDuration',
          'deliveryDate',
          'deliveryTime',
          'deliveryAddress',
          'placementLocation',
        ];
        break;
      case 4:
        fieldsToValidate = ['materialType'];
        break;
      case 5:
        // Additional services are optional
        return true;
      case 6:
        fieldsToValidate = ['customerInfo'];
        break;
    }

    return await trigger(fieldsToValidate);
  };

  const handleNext = async () => {
    const isValid = await validateCurrentStep();
    if (isValid && currentStep < 6) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const onSubmit = (data: QuoteFormData) => {
    const quoteSummary: QuoteSummary = {
      ...data,
      quoteId: generateQuoteId(),
      timestamp: new Date().toISOString(),
      priceBreakdown,
    };

    // Save to localStorage for the summary page
    localStorage.setItem('quote-summary', JSON.stringify(quoteSummary));

    // Navigate to summary page
    navigate('/quote/summary');
  };

  const renderStep = () => {
    const projectType = watch('projectType');
    const containerSize = watch('containerSize');
    const materialType = watch('materialType');

    switch (currentStep) {
      case 1:
        return <Step1ProjectType register={register} errors={errors} value={projectType} />;
      case 2:
        return <Step2Container register={register} errors={errors} value={containerSize} />;
      case 3:
        return <Step3RentalDetails register={register} errors={errors} />;
      case 4:
        return <Step4MaterialType register={register} errors={errors} value={materialType} />;
      case 5:
        return <Step5AdditionalServices register={register} errors={errors} watch={watch} />;
      case 6:
        return <Step6CustomerInfo register={register} errors={errors} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Get Your Free Quote</h1>
          <p className="text-lg text-slate-600">
            Complete the form below to receive an instant price estimate
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-slate-200 p-8 md:p-10">
              <StepIndicator currentStep={currentStep} totalSteps={6} steps={steps} />

              <form onSubmit={handleSubmit(onSubmit)}>
                {renderStep()}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className={currentStep === 1 ? 'invisible' : ''}
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" /> Back
                  </Button>

                  {currentStep < 6 ? (
                    <Button type="button" variant="primary" onClick={handleNext} className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg">
                      Next <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  ) : (
                    <Button type="submit" variant="primary" className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg">
                      Get My Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Price Breakdown Sidebar */}
          <div className="lg:col-span-1">
            <PriceBreakdown breakdown={priceBreakdown} deliveryZone={zone?.zone} />
          </div>
        </div>
      </div>
    </div>
  );
};
