import type { Route } from "./+types/create";
import { Link } from "react-router";
import { useState } from "react";
import "app/app.css";
import {
    AgeStep,
    BackstoryStep,
    CharacteristicsStep,
    FinalStep,
    OccupationStep,
    SkillsStep,
} from "../components/create";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Create Character | CoC 100" },
        { name: "description", content: "Create a new Call of Cthulhu investigator" },
    ];
}

export default function Create() {
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 6));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    return (
        <div className="bg-base-200 min-h-screen w-full flex flex-col p-6">
            <div className="max-w-4xl mx-auto w-full bg-base-100 shadow-xl rounded-box p-8">
                <div className="flex justify-between items-center mb-8 border-b border-base-300 pb-4">
                    <h1 className="text-3xl font-bold text-primary">Create Investigator</h1>
                    <Link to="/" className="btn btn-ghost">Cancel</Link>
                </div>

                {/* Step Indicator */}
                <div className="flex justify-center mb-10 overflow-x-auto pb-4">
                    <ul className="steps steps-horizontal w-full min-w-[700px]">
                        <li className={`step ${currentStep >= 1 ? "step-primary" : ""}`}>Stats</li>
                        <li className={`step ${currentStep >= 2 ? "step-primary" : ""}`}>Age</li>
                        <li className={`step ${currentStep >= 3 ? "step-primary" : ""}`}>Job</li>
                        <li className={`step ${currentStep >= 4 ? "step-primary" : ""}`}>Skills</li>
                        <li className={`step ${currentStep >= 5 ? "step-primary" : ""}`}>History</li>
                        <li className={`step ${currentStep >= 6 ? "step-primary" : ""}`}>Final</li>
                    </ul>
                </div>

                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    {/* Step 1: Characteristics */}
                    {currentStep === 1 && <CharacteristicsStep />}

                    {/* Step 2: Age */}
                    {currentStep === 2 && <AgeStep />}

                    {/* Step 3: Occupation */}
                    {currentStep === 3 && <OccupationStep />}

                    {/* Step 4: Skills */}
                    {currentStep === 4 && <SkillsStep />}

                    {/* Step 5: Backstory */}
                    {currentStep === 5 && <BackstoryStep />}

                    {/* Step 6: Finalization */}
                    {currentStep === 6 && <FinalStep />}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-8 border-t border-base-300">
                        <button
                            type="button"
                            className={`btn btn-outline px-8 ${currentStep === 1 ? "invisible" : ""}`}
                            onClick={prevStep}
                        >
                            Back
                        </button>

                        {currentStep < 6 ? (
                            <button
                                type="button"
                                className="btn btn-primary px-12"
                                onClick={nextStep}
                            >
                                Next Step
                            </button>
                        ) : (
                            <button type="submit" className="btn btn-success px-12 text-white btn-lg">
                                Finalize Character
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
