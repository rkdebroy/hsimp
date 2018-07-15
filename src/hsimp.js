import setup from "hsimp-purescript";

const noOp = () => {};

const hsimp = (config, input, { time = noOp, checks = noOp }) => {
    const calculate = setup(config);

    if (!("value" in input)) {
        throw new Error("Input is not a valid DOM element")
    }

    input.addEventListener("keydown", () => {
        const result = calculate(input.value);
        time(result.time);
        checks(result.checks);
    });
};

export default hsimp;
