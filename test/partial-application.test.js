import partial from "../src/partial-application";

test('partial application test', () => {
    function list(first, second, third) {
        return `${first}:${second}:${third}`;
    }
    
    let partialFirst = partial(list, "I'm a firsted!");
    expect(partialFirst('not seconded', 'not thirded')).toBe("I'm a firsted!:not seconded:not thirded");
});