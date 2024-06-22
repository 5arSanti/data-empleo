const scrollToValue = (xValue=0, yValue=480, delay=0) => {
    setTimeout(() => {
        document.documentElement.scrollTo(xValue, yValue)
    }, delay);
}

export { scrollToValue }; 