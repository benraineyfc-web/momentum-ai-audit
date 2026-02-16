interface Step4Props {
  register: any;
  errors: any;
  formData: any;
  onNext: () => void;
  onPrev: () => void;
}

export default function Step4({ register, errors, formData, onNext, onPrev }: Step4Props) {
  const aiOptions = [
    { value: 'yes', label: 'Yes, I use AI tools' },
    { value: 'no', label: 'No, not yet' },
    { value: 'tried', label: 'I tried but gave up' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">
        AI Readiness Check
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-3">
            Are you currently using any AI tools in your business?
          </label>
          <div className="space-y-2">
            {aiOptions.map((option) => (
              <label
                key={option.value}
                className="flex items-center p-4 border-2 border-neutral-200 rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-all"
              >
                <input
                  {...register('aiToolsUsed')}
                  type="radio"
                  value={option.value}
                  className="mr-3 w-5 h-5"
                />
                <span className="text-neutral-900">{option.label}</span>
              </label>
            ))}
          </div>
          {errors.aiToolsUsed && (
            <p className="text-error text-sm mt-2">{errors.aiToolsUsed.message}</p>
          )}
        </div>

        {formData.aiToolsUsed === 'yes' && (
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Which AI tools are you using?
            </label>
            <input
              {...register('aiToolsList')}
              type="text"
              placeholder="e.g., ChatGPT, Jasper, Copy.ai"
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            If AI could solve one problem for you tomorrow, what would it be?
          </label>
          <textarea
            {...register('aiWish')}
            placeholder="Describe the problem you want AI to solve..."
            rows={4}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          {errors.aiWish && (
            <p className="text-error text-sm mt-2">{errors.aiWish.message}</p>
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
