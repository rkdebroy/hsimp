import charactersSets from "hsimp-purescript/dictionaries/character-sets";
import periods from "hsimp-purescript/dictionaries/periods";
import namedNumbers from "hsimp-purescript/dictionaries/named-numbers";
import dictionary from "hsimp-purescript/dictionaries/top10k";
import patterns from "hsimp-purescript/dictionaries/patterns";
import messages from "hsimp-purescript/dictionaries/checks";

const config = calcs => ({
    calculation: { calcs, characterSets },
    time: { periods, namedNumbers, forever: "Forever", instantly: "Instantly" },
    checks: { dictionary, patterns, messages },
});

export default config;
