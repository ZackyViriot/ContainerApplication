import React, { useState } from 'react';
import { motion } from 'motion/react';
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
        return <Step3RentalDetails register={register} errors={errors} watch={watch} />;
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-50/60 via-white to-emerald-50/60"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(132, 204, 22, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132, 204, 22, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight">
              Get Your{' '}
              <span className="bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">
                Free Quote
              </span>
            </h1>
            <p className="text-lg text-slate-600">
              Complete the form below to receive an instant price estimate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 md:p-10 hover:border-lime-300 transition-colors duration-300">
                <StepIndicator currentStep={currentStep} totalSteps={6} steps={steps} />

                <form onSubmit={handleSubmit(onSubmit)}>
                  {renderStep()}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                      disabled={currentStep === 1}
                      className={`border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${currentStep === 1 ? 'invisible' : ''}`}
                    >
                      <ArrowLeft className="mr-2 h-5 w-5" /> Back
                    </Button>

                    {currentStep < 6 ? (
                      <Button
                        type="button"
                        variant="primary"
                        onClick={handleNext}
                        className="bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-lime-500/30 hover:shadow-xl transition-all duration-300"
                      >
                        Next <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        variant="primary"
                        className="bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-lime-500/30 hover:shadow-xl transition-all duration-300"
                      >
                        Get My Quote <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Price Breakdown Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-1"
            >
              <PriceBreakdown breakdown={priceBreakdown} deliveryZone={zone?.zone} />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
