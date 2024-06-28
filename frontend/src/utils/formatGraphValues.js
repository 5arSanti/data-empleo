const formatGraphValues = (object) => {
    // if (!object) { return; }

    const keys = Object.keys(object)
    const values = Object.keys(object).map(item => object[item]);

    return [keys, values];
}

export { formatGraphValues };