import React from "react";

export function BackstoryStep() {
  return (
    <section className="animate-fade-in">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-secondary">Step 5: Backstory & Details</h2>
        <p className="text-base-content/70 mt-1">Finalize your investigator's identity and history.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="form-control w-full">
            <label className="label"><span className="label-text font-semibold">Investigator Name</span></label>
            <input type="text" placeholder="John Doe" className="input input-bordered w-full focus:input-primary" />
          </div>
          <div className="form-control w-full">
            <label className="label"><span className="label-text font-semibold">Player Name</span></label>
            <input type="text" placeholder="Your Name" className="input input-bordered w-full focus:input-primary" />
          </div>
          <div className="form-control w-full">
            <label className="label"><span className="label-text font-semibold">Sex</span></label>
            <select className="select select-bordered w-full focus:select-primary" defaultValue="">
              <option disabled value="">Select sex</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label"><span className="label-text font-semibold">Residence</span></label>
            <input type="text" placeholder="Arkham, MA" className="input input-bordered w-full focus:input-primary" />
          </div>
        </div>

        <div className="form-control w-full h-full">
          <label className="label"><span className="label-text font-semibold">Backstory</span></label>
          <textarea
            className="textarea textarea-bordered h-full min-h-[250px] focus:textarea-primary"
            placeholder="Describe your investigator's history, notable events, and personal traits..."
          ></textarea>
        </div>
      </div>
    </section>
  );
}
