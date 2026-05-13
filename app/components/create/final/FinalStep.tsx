import React from "react";

export function FinalStep() {
  return (
    <section className="animate-fade-in">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-secondary">Step 6: Finalization</h2>
        <p className="text-base-content/70 mt-1">Review your investigator and set out into the unknown.</p>
      </div>

      <div className="card bg-base-200 shadow-inner p-8 border border-base-300">
        <div className="text-center space-y-6">
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold">Investigator Ready!</h3>
          <p className="max-w-md mx-auto text-base-content/70">
            Everything seems to be in order. Your investigator is ready to face the cosmic horrors that await in the shadows of Arkham.
          </p>
          <div className="flex flex-wrap justify-center gap-4 py-4">
            <div className="badge badge-outline p-4">Stats: Verified</div>
            <div className="badge badge-outline p-4">Occupation: Set</div>
            <div className="badge badge-outline p-4">Skills: Allocated</div>
            <div className="badge badge-outline p-4">Backstory: Written</div>
          </div>
        </div>
      </div>
    </section>
  );
}
