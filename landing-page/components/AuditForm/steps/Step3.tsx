interface Step3Props {
  register: any;
  errors: any;
  onNext: () => void;
  onPrev: () => void;
}

export default function Step3({ register, errors, onNext, onPrev }: Step3Props) {
  const timeOptions = [
    { value: '5-10', label: '5–10 hours/week' },
    { value: '10-15', label: '10–15 hours/week' },
    { value: '15-20', label: '15–20 hours/week' },
    { value: '20+', label: '20+ hours/week' },
    { value: 'not-sure', label: 'Not sure' },
  ];

  const revenueOptions = [
    { value: '0-10k', label: '£0–£10k/month' },
    { value: '10-25k', label: '£10k–£25k/month' },
    { value: '25-50k', label: '£25k–£50k/month' },
    { value: '50-100k', label: '£50k–£100k/month' },
    { value: '100k+', label: '£100k+/month' },
    { value: 'prefer-not', label: 'Prefer not to say' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">
        Let's quantify the impact
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-3">
            How much time do you waste on manual tasks each week?
          </label>
          <div className="space-y-2">
            {timeOptions.map((option) => (
              <label
                key={option.value}
                className="flex items-center p-3 border border-neutral-200 rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-all"
              >
                <input
                  {...register('timeWasted')}
                  type="radio"
                  value={option.value}
                  className="mr-3 w-4 h-4"
                />
                <span className="text-neutral-900">{option.label}</span>
              </label>
            ))}
          </div>
          {errors.timeWasted && (
            <p className="text-error text-sm mt-2">{errors.timeWasted.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-3">
            What's your approximate monthly revenue?
          </label>
          <p className="text-sm text-neutral-500 mb-3">
            (This helps us tailor recommendations to your business size)
          </p>
          <div className="space-y-2">
            {revenueOptions.map((option) => (
              <label
                key={option.value}
                className="flex items-center p-3 border border-neutral-200 rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-all"
              >
                <input
                  {...register('monthlyRevenue')}
                  type="radio"
                  value={option.value}
                  className="mr-3 w-4 h-4"
                />
                <span className="text-neutral-900">{option.label}</span>
              </label>
            ))}
          </div>
          {errors.monthlyRevenue && (
            <p className="text-error text-sm mt-2">{errors.monthlyRevenue.message}</p>
          )}
        </div>
      </div>

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
