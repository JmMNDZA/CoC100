import React from "react";

export function SkillsStep() {
  const commonSkills = [
    "Accounting", "Anthropology", "Appraise", "Archaeology", "Art/Craft", "Charm", "Climb", "Credit Rating",
    "Cthulhu Mythos", "Disguise", "Dodge", "Drive Auto", "Elec Repair", "Fast Talk", "First Aid", "History",
    "Intimidate", "Jump", "Language (Own)", "Law", "Library Use", "Listen", "Locksmith", "Mech Repair",
    "Medicine", "Natural World", "Navigate", "Occult", "Persuade", "Psychology", "Ride", "Science",
    "Sleight of Hand", "Spot Hidden", "Stealth", "Swim", "Track"
  ];

  return (
    <section className="animate-fade-in">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-secondary">Step 4: Investigator Skills</h2>
          <p className="text-base-content/70 mt-1">Assign skill points based on your Occupation and Interest.</p>
        </div>
        <div className="badge badge-lg badge-primary gap-2">
          Points Remaining: 320
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4 max-h-[500px] overflow-y-auto p-2 border border-base-200 rounded-xl bg-base-50/50">
        {commonSkills.map((skill) => (
          <div key={skill} className="flex items-center justify-between group">
            <label className="text-sm font-medium truncate pr-2 group-hover:text-primary transition-colors">{skill}</label>
            <div className="flex items-center gap-1">
              <input
                type="number"
                className="input input-bordered input-xs w-12 text-center font-bold"
                defaultValue={5}
                min="0"
                max="99"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
