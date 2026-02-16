interface Step2Props {
  register: any;
  errors: any;
  formData: any;
  onNext: () => void;
  onPrev: () => void;
}

export default function Step2({ register, errors, formData, onNext, onPrev }: Step2Props) {
  const frustrations = [
    { value: 'manual-tasks', label: 'Manual tasks eating 10–20hrs/week' },
    { value: 'slow-leads', label: 'Slow lead response times' },
    { value: 'invisible-online', label: 'Invisible on Google/social media' },
    { value: 'no-systems', label: 'No proper systems or automation' },
    { value: 'competitors-ahead', label: 'Competitors using AI while I\'m stuck' },
    { value: 'other', label: 'Something else' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-neutral-900 mb-4">
        What's your biggest frustration right now?
      </h2>
      <p className="text-neutral-600 mb-6">
        Choose the one that's costing you the most
      </p>

      <div className="space-y-3 mb-4">
        {frustrations.map((option) => (
          <label
            key={option.value}
            className="flex items-center p-4 border-2 border-neutral-200 rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-all"
          >
            <input
              {...register('biggestFrustration')}
              type="radio"
              value={option.value}
              className="mr-3 w-5 h-5"
            />
            <span className="text-neutral-900">{option.label}</span>
          </label>
        ))}
      </div>

      {formData.biggestFrustration === 'other' && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Please describe your biggest frustration
          </label>
          <textarea
            {...register('otherFrustration')}
            placeholder="Tell us what's causing the most problems..."
            rows={3}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      )}

      {errors.biggestFrustration && (
        <p className="text-error text-sm mt-2">{errors.biggestFrustration.message}</p>
      )}

      <div className="flex gap-4 mt-8">
        <button
          type="button"
          onClick={onPrev}
          className="flex-1 bg-neutral-200 hover:bg-neutral-300 text-neutral-700 font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
