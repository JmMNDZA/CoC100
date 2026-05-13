import React from "react";
import { RollInput } from "../../RollInput";
import {
    CharacteristicDrawerDetails,
    CHARACTERISTICS,
    CHARACTERISTIC_DISPLAY_NAMES,
    type Characteristic,
} from "./CharacteristicDrawerDetails";

const DRAWER_TOGGLE_ID = "characteristics-info-drawer";

export function CharacteristicsStep() {
    const [drawerChar, setDrawerChar] = React.useState<Characteristic | null>(null);

    const renderCharacteristic = (char: Characteristic) => (
        <RollInput
            key={char}
            label={char}
            placeholder="0"
            maxLength={2}
            onLabelClick={() => setDrawerChar(char)}
        />
    );

    return (
        <section className="drawer drawer-end animate-fade-in">
            <input
                id={DRAWER_TOGGLE_ID}
                type="checkbox"
                className="drawer-toggle"
                checked={drawerChar !== null}
                onChange={(e) => {
                    if (!e.target.checked) setDrawerChar(null);
                }}
            />
            <div className="drawer-content">
                <div className="flex justify-between items-end mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-secondary">Step 1: Characteristics</h2>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-3">
                            {CHARACTERISTICS.slice(0, 4).map(renderCharacteristic)}
                        </div>
                        <div className="flex flex-col gap-3">
                            {CHARACTERISTICS.slice(4, 8).map(renderCharacteristic)}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-[calc(50%-0.5rem)]">
                            {CHARACTERISTICS.slice(8).map(renderCharacteristic)}
                        </div>
                    </div>
                </div>
            </div>

            <div className="drawer-side z-50">
                <label htmlFor={DRAWER_TOGGLE_ID} className="drawer-overlay" aria-label="Close sidebar" />
                <aside className="flex min-h-full w-80 max-w-[min(100vw-2rem,20rem)] flex-col border-l border-base-300 bg-base-100 p-6 shadow-2xl">
                    <div className="mb-4 flex items-start justify-between gap-2">
                        <h3 className="text-lg font-bold text-secondary">
                            {drawerChar != null ? CHARACTERISTIC_DISPLAY_NAMES[drawerChar] : "Characteristic"}
                        </h3>
                        <button
                            type="button"
                            className="btn btn-ghost btn-sm btn-square"
                            aria-label="Close"
                            onClick={() => setDrawerChar(null)}
                        >
                            ✕
                        </button>
                    </div>
                    {drawerChar != null && <CharacteristicDrawerDetails characteristic={drawerChar} />}
                </aside>
            </div>
        </section>
    );
}
