interface Step5Props {
  register: any;
  errors: any;
  isSubmitting: boolean;
  onPrev: () => void;
}

export default function Step5({ register, errors, isSubmitting, onPrev }: Step5Props) {
  const options = [
    { value: 'no-problem', label: '✅ No problem, let\'s book', emoji: '✅' },
    { value: 'seems-high', label: '🤔 Seems high, but I\'m interested', emoji: '🤔' },
    { value: 'too-expensive', label: '❌ Too expensive for me right now', emoji: '❌' },
    { value: 'need-value', label: '❓ I need to understand the value first', emoji: '❓' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-neutral-900 mb-4">
        Final Question: Pricing
      </h2>
      <p className="text-neutral-600 mb-6">
        This audit is <strong>£497</strong>. How does that feel?
      </p>

      <div className="space-y-3">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center p-4 border-2 border-neutral-200 rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-all"
          >
            <input
              {...register('priceFeeling')}
              type="radio"
              value={option.value}
              className="mr-3 w-5 h-5"
            />
            <span className="text-lg">{option.label}</span>
          </label>
        ))}
      </div>

      {errors.priceFeeling && (
        <p className="text-error text-sm mt-2">{errors.priceFeeling.message}</p>
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
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  );
}
