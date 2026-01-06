import React from 'react';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps: { title: string }[];
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps, steps }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-900">
          Step {currentStep} of {totalSteps}
        </h3>
        <div className="text-sm font-medium text-slate-500">
          {Math.round((currentStep / totalSteps) * 100)}% Complete
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-slate-200 rounded-full h-2 mb-6 overflow-hidden">
        <div
          className="bg-gradient-to-r from-lime-500 to-emerald-500 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>

      {/* Step indicators */}
      <div className="hidden md:flex justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-all duration-300 ${
                  isCompleted
                    ? 'bg-gradient-to-br from-lime-500 to-emerald-500 text-white shadow-lg shadow-lime-500/30'
                    : isCurrent
                    ? 'bg-gradient-to-br from-lime-500 to-emerald-500 text-white shadow-lg shadow-lime-500/30 scale-110'
                    : 'bg-slate-200 text-slate-500'
                }`}
              >
                {isCompleted ? <Check className="h-5 w-5" /> : stepNumber}
              </div>
              <span
                className={`text-xs text-center font-medium transition-colors ${
                  isCurrent ? 'text-lime-600 font-bold' : isCompleted ? 'text-emerald-600' : 'text-slate-500'
                }`}
              >
                {step.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
