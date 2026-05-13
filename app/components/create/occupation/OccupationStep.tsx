import React, { useMemo, useState } from "react";
import { ChoiceDropdown } from "../../ChoiceDropdown";

const OCCUPATION_CHOICES = [
  "Antiquarian",
  "Artist",
  "Author",
  "Clergy",
  "Criminal",
  "Dilettante",
  "Doctor of Medicine",
  "Drifter",
  "Entertainer",
  "Journalist",
  "Lawyer",
  "Librarian",
  "Mercenary",
  "Military Officer",
  "Occultist",
  "Parapsychologist",
  "Police Detective",
  "Private Investigator",
  "Professor",
  "Soldier",
  "Spy",
] as const;

export function OccupationStep() {
  const [occupation, setOccupation] = useState("");
  const choiceSet = useMemo(() => new Set(OCCUPATION_CHOICES), []);
  const dropdownValue = choiceSet.has(occupation as (typeof OCCUPATION_CHOICES)[number])
    ? occupation
    : "";

  return (
    <section className="animate-fade-in">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-secondary">Step 3: Occupation</h2>
        <p className="text-base-content/70 mt-1">Select or define your investigator's profession.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="flex flex-col gap-4 w-full">
          <ChoiceDropdown
            label="Occupation (preset)"
            options={OCCUPATION_CHOICES}
            value={dropdownValue}
            onChange={(v) => setOccupation(v)}
            placeholder="Pick from common occupations…"
          />
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-lg">Current occupation</span>
            </label>
            <input
              type="text"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              placeholder="Private Eye, Professor, Journalist…"
              className="input input-bordered input-lg w-full focus:input-primary"
            />
          </div>
        </div>
        <div className="bg-base-200 p-6 rounded-xl border border-base-300">
          <h3 className="font-bold mb-2">Did you know?</h3>
          <p className="text-sm text-base-content/70 leading-relaxed">
            Your occupation determines your Occupational Skills and your Credit Rating range.
            Think about what kind of life your investigator has led up to this point.
          </p>
        </div>
      </div>
    </section>
  );
}
