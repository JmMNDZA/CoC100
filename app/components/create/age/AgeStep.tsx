import React, { useState } from "react";
import { RollInput } from "../../RollInput";
import { CharacteristicDeduction } from "./CharacteristicDeduction";
import { ImprovementRoll } from "./ImprovementRoll";
import { InstructionBox } from "./InstructionBox";
import { AgeAlert } from "./AgeAlert";

export function AgeStep() {
    const [age, setAge] = useState<string>("");
    const ageNumber = parseInt(age, 10);
    const isInvalid = age !== "" && (isNaN(ageNumber) || ageNumber < 15);

    return (
        <section className="animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold text-secondary">Step 2: Age</h2>
                <RollInput
                    variant="inline"
                    placeholder="15-99"
                    maxLength={2}
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>

            <div className="main-age">
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isInvalid ? "max-h-20 opacity-100 mb-4" : "max-h-0 opacity-0 mb-0"}`}>
                    <AgeAlert message="Invalid age" />
                </div>

                {!isInvalid && ageNumber >= 15 && ageNumber <= 19 && (
                    <div className="space-y-6">
                        <CharacteristicDeduction
                            points={5}
                            text="Deduct 5 points among STR and SIZ."
                            characteristics={["STR", "SIZ"]}
                        />
                        <InstructionBox
                            title="Characteristic Deduction"
                            text="Deduct 5 points from EDU."
                        />
                        <div>
                            <InstructionBox
                                title="Luck Score"
                                text="Roll twice to generate a Luck score and use the higher value."
                            />
                            <ImprovementRoll label="Luck Score" />
                        </div>
                    </div>
                )}
                {!isInvalid && ageNumber >= 20 && ageNumber <= 39 && (
                    <div className="space-y-6">
                        <ImprovementRoll label="EDU Improvement Roll" />
                    </div>
                )}

                {!isInvalid && ageNumber >= 40 && ageNumber <= 49 && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ImprovementRoll label="EDU Improvement Roll 1" />
                            <ImprovementRoll label="EDU Improvement Roll 2" />
                        </div>
                        <CharacteristicDeduction
                            points={5}
                            text="Deduct 5 points among STR, CON, or DEX."
                            characteristics={["STR", "CON", "DEX"]}
                        />
                        <InstructionBox
                            title="APP Reduction"
                            text="Reduce APP by 5."
                        />
                    </div>
                )}

                {!isInvalid && ageNumber >= 50 && ageNumber <= 59 && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <ImprovementRoll label="EDU Improvement Roll 1" />
                            <ImprovementRoll label="EDU Improvement Roll 2" />
                            <ImprovementRoll label="EDU Improvement Roll 3" />
                        </div>
                        <CharacteristicDeduction
                            points={10}
                            text="Deduct 10 points among STR, CON, or DEX."
                            characteristics={["STR", "CON", "DEX"]}
                        />
                        <InstructionBox
                            title="APP Reduction"
                            text="Reduce APP by 10."
                        />
                    </div>
                )}

                {!isInvalid && ageNumber >= 60 && ageNumber <= 69 && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <ImprovementRoll label="EDU Improvement Roll 1" />
                            <ImprovementRoll label="EDU Improvement Roll 2" />
                            <ImprovementRoll label="EDU Improvement Roll 3" />
                            <ImprovementRoll label="EDU Improvement Roll 4" />
                        </div>
                        <CharacteristicDeduction
                            points={20}
                            text="Deduct 20 points among STR, CON, or DEX."
                            characteristics={["STR", "CON", "DEX"]}
                        />
                        <InstructionBox
                            title="APP Reduction"
                            text="Reduce APP by 15."
                        />
                    </div>
                )}

                {!isInvalid && ageNumber >= 70 && ageNumber <= 79 && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <ImprovementRoll label="EDU Improvement Roll 1" />
                            <ImprovementRoll label="EDU Improvement Roll 2" />
                            <ImprovementRoll label="EDU Improvement Roll 3" />
                            <ImprovementRoll label="EDU Improvement Roll 4" />
                        </div>
                        <CharacteristicDeduction
                            points={40}
                            text="Deduct 40 points among STR, CON, or DEX."
                            characteristics={["STR", "CON", "DEX"]}
                        />
                        <InstructionBox
                            title="APP Reduction"
                            text="Reduce APP by 20."
                        />
                    </div>
                )}

                {!isInvalid && ageNumber >= 80 && ageNumber <= 99 && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <ImprovementRoll label="EDU Improvement Roll 1" />
                            <ImprovementRoll label="EDU Improvement Roll 2" />
                            <ImprovementRoll label="EDU Improvement Roll 3" />
                            <ImprovementRoll label="EDU Improvement Roll 4" />
                        </div>
                        <CharacteristicDeduction
                            points={80}
                            text="Deduct 80 points among STR, CON, or DEX."
                            characteristics={["STR", "CON", "DEX"]}
                        />
                        <InstructionBox
                            title="APP Reduction"
                            text="Reduce APP by 25."
                        />
                    </div>
                )}
            </div>
        </section>
    );
}
