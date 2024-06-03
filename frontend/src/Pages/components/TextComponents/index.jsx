import "./styles.css";

const TextCard = ({children, textAlign="start", width="100%"}) => {
    return(
        <p style={{textAlign: textAlign, width: width}} className="text-card">{children}</p>
    );
}

const SpanCard = ({children}) => {
    return(
        <span className="span-card">{children}</span>
    );
}

export { TextCard, SpanCard }