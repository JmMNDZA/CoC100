export const CHARACTERISTICS = ["STR", "CON", "SIZ", "DEX", "APP", "INT", "POW", "EDU", "LUCK"] as const;

export type Characteristic = (typeof CHARACTERISTICS)[number];

/** Full characteristic names for UI (sidebar title, etc.). */
export const CHARACTERISTIC_DISPLAY_NAMES: Record<Characteristic, string> = {
    STR: "Strength",
    CON: "Constitution",
    SIZ: "Size",
    DEX: "Dexterity",
    APP: "Appearance",
    INT: "Intelligence",
    POW: "Power",
    EDU: "Education",
    LUCK: "Luck",
};

export type CharacteristicReferenceRow = {
    /** Left column (typically a characteristic score or threshold). */
    value: number | string;
    description: string;
};

export type CharacteristicReferenceSection = {
    /** Optional heading above the table (omit when the drawer title is enough). */
    title?: string;
    /** Header for the first column; defaults to "Score". */
    valueColumnHeader?: string;
    rows: CharacteristicReferenceRow[];
};

const CHARACTERISTIC_DRAWER_COPY: Record<Characteristic, string> = {
    STR: "Strength measures the muscle power of an investigator. The higher it is, the more the investigator can lift or tightly cling to something. This characteristic determines the damage an investigator inflicts in hand-to-hand combat. Reduced to STR 0, an investigator is an invalid, unable to get out of bed.",
    CON: "Constitution represents health, vigor, and vitality. Poisons and diseases may directly challenge an investigator’s constitution. Investigators with a high constitution often have more hit points—the better to resist injury and attack. Serious physical injury or magical attack might lower the statistic, and if Constitution reaches zero the investigator dies.",
    SIZ: "Size averages both height and weight into a single number. To see over a wall, to squeeze through a small opening, or even to judge whose head might be sticking up out of the grass, use size. Size helps determine hit points, damage bonus, and build. One might decrease SIZ to indicate the loss of a limb, though lowering DEX is more often the solution. Presumably if investigators lose all SIZ points they disappear—goodness knows to where!",
    DEX: "Investigators with higher Dexterity scores are quicker, nimbler, and more physically flexible. A DEX roll might be made to grab a support to keep from falling, to move faster than an opponent, or to accomplish some delicate task. An investigator with zero DEX is uncoordinated and unable to perform physical tasks.",
    APP: "Appearance measures both physical attractiveness and personality. A person with high APP is charming and likeable, but may lack conventional good looks. An investigator with APP of 0 is appallingly ugly or someone with a wholly detestable demeanor, provoking comment and shock everywhere.",
    INT: "Intelligence represents how well investigators learn, remember, analyze information, and solve complex puzzles. An investigator with zero INT is a babbling, drooling idiot.",
    POW: "Power indicates force of will: the higher the POW, the higher the aptitude for, and resistance to, magic. An investigator with zero POW is zombie-like and without purpose, as well as being unable to use magic. Unless stated otherwise, POW that is lost during the game is lost permanently.",
    EDU: "Education is a measure of the formal and factual knowledge possessed by the investigator, as well as indicating the time the investigator has spent in full-time education. EDU measures retained information, not the intelligent application of that information (see Intelligence). An investigator without EDU would be like a newborn baby or an amnesiac—without knowledge of the world, probably very curious and credulous.",
    LUCK: "Luck rolls are often called for by the Keeper when circumstances external to an investigator are in question, and when determining the fickle hand of fate.",
};

/** Optional reference scales shown under each characteristic's description when present. */
const CHARACTERISTIC_REFERENCE: Partial<Record<Characteristic, CharacteristicReferenceSection>> = {
    STR: {
        rows: [
            { value: 0, description: "Enfeebled: unable to even stand up or lift a cup of tea." },
            { value: 15, description: "Puny, weak." },
            { value: 50, description: "Average human strength." },
            { value: 90, description: "One of the strongest people you've ever met." },
            { value: 99, description: "World-class (Olympic weightlifter). Human maximum." },
            { value: 140, description: "Beyond human strength (gorilla or horse)." },
        ],
    },
    CON: {
        rows: [
            { value: 0, description: "Dead." },
            { value: 1, description: "Sickly, prone to prolonged illness and probably unable to operate without assistance." },
            { value: 15, description: "Weak health, prone to bouts of ill health, great propensity for feeling pain." },
            { value: 50, description: "Average healthy human." },
            { value: 90, description: "Shrugs off colds, hardy and hale." },
            { value: 99, description: "Iron constitution, able to withstand great amounts of pain. Human maximum." },
            { value: 140, description: "Beyond human constitution (e.g. elephant)." },
        ],
    },
    SIZ: {
        rows: [
            { value: 1, description: "A baby (1 to 12 pounds)." },
            { value: 15, description: "Child, very short in stature (dwarf) (33 pounds / 15 kg)." },
            { value: 65, description: "Average human size (moderate height and weight) (170 pounds / 75 kg)." },
            { value: 80, description: "Very tall, strongly built, or obese. (240 pounds / 110 kg)." },
            { value: 99, description: "Oversize in some respect (330 pounds / 150 kg)." },
            { value: 150, description: "Horse or cow (960 pounds / 436 kg)." },
            { value: 180, description: "Heaviest human ever recorded (1400 pounds / 634 kg)." },
        ],
    },
    DEX: {
        rows: [
            { value: 0, description: "Unable to move without assistance." },
            { value: 15, description: "Slow, clumsy with poor motor skills for fine manipulation." },
            { value: 50, description: "Average human dexterity." },
            { value: 90, description: "Fast, nimble and able to perform feats of fine manipulation (e.g. acrobat, great dancer)." },
            { value: 99, description: "World-class athlete (e.g. Olympic standard). Human maximum." },
            { value: 120, description: "Beyond human dexterity (e.g. tiger)." },
        ],
    },
    APP: {
        rows: [
            { value: 0, description: "So unsightly that others are affected by fear, revulsion, or pity." },
            { value: 15, description: "Ugly, possibly disfigured due to injury or at birth." },
            { value: 50, description: "Average human appearance." },
            { value: 90, description: "One of the most charming people you could meet, natural magnetism." },
            { value: 99, description: "The height of glamour and cool (supermodel or world renowned film star). Human maximum." },
        ],
    },
    INT: {
        rows: [
            { value: 0, description: "No intellect, unable to comprehend the world around them." },
            { value: 15, description: "Slow learner, able to undertake only the most basic math, or read beginner-level books." },
            { value: 50, description: "Average human intellect." },
            { value: 90, description: "Quick-witted, probably able to comprehend multiple languages or theorems." },
            { value: 99, description: "Genius (Einstein, Da Vinci, Tesla, etc.). Human maximum." },
        ],
    },
    POW: {
        rows: [
            { value: 0, description: "Enfeebled mind, no willpower or drive, no magical potential." },
            { value: 15, description: "Weak-willed, easily dominated by those with a greater intellect or willpower." },
            { value: 50, description: "Average human." },
            { value: 90, description: "Strong willed, driven, a high potential to connect with the unseen and magical." },
            { value: 100, description: "Iron will, strong connection to the spiritual “realm” or unseen world." },
            { value: 140, description: "Beyond human, possibly alien." },
        ],
    },
    EDU: {
        rows: [
            { value: 0, description: "A newborn baby." },
            { value: 15, description: "Completely uneducated in every way." },
            { value: 60, description: "High school graduate." },
            { value: 70, description: "College graduate (Bachelor degree)." },
            { value: 80, description: "Degree level graduate (Master's degree)." },
            { value: 90, description: "Doctorate, professor." },
            { value: 96, description: "World-class authority in their field of study." },
            { value: 99, description: "Human maximum." },
        ],
    },
};

function CharacteristicReferenceTable({ title, valueColumnHeader = "Score", rows }: CharacteristicReferenceSection) {
    return (
        <div className="space-y-2">
            {title ? <h4 className="font-semibold text-base-content">{title}</h4> : null}
            <div className="overflow-x-auto">
                <table className="table table-xs sm:table-sm">
                    <thead>
                        <tr>
                            <th className="w-16">{valueColumnHeader}</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={`${row.value}-${index}`}>
                                <td className="font-mono tabular-nums">{row.value}</td>
                                <td>{row.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export interface CharacteristicDrawerDetailsProps {
    characteristic: Characteristic;
}

/** Characteristic info sidebar: copy + shared typography for whatever stat is open. */
export function CharacteristicDrawerDetails({ characteristic }: CharacteristicDrawerDetailsProps) {
    const reference = CHARACTERISTIC_REFERENCE[characteristic];

    return (
        <div className="space-y-4 text-sm text-base-content/80">
            <p className="whitespace-pre-wrap">{CHARACTERISTIC_DRAWER_COPY[characteristic]}</p>
            {reference ? <CharacteristicReferenceTable {...reference} /> : null}
        </div>
    );
}
