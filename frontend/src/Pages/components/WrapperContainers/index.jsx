import "./styles.css";

const WrapperContainer1 = ({children, flexDirection = "row", padding = 20, gap = 15, justifyContent="start", alignItems="center"}) => {
    return(
        <div className="wrapper-container1 shadow-style border-left-style" style={{
            flexDirection: flexDirection,
            padding: padding,
            gap: gap,
            justifyContent: justifyContent, 
            alignItems: alignItems,
        }}>
            {children}
        </div>
    );
}

const WrapperContainer2 = ({children, flexDirection = "row", padding = 20, paddingVertical=null, gap = 15, justifyContent="start", alignItems="center", className=""}) => {
    return(
        <div className={`wrapper-container2 ${className}`} style={{
            flexDirection: flexDirection,
            padding: padding,
            paddingTop: paddingVertical || padding,
            paddingBottom: paddingVertical || padding,
            gap: gap,
            justifyContent: justifyContent,
            alignItems: alignItems
        }}>
            {children}
        </div>
    );
}

const WrapperContainer3 = ({children, flexDirection = "row", padding = 20, paddingVertical=null, gap = 15, justifyContent="start", alignItems="center", className=""}) => {
    return(
        <div className={`wrapper-container3 border-left-style shadow-style ${className}`} style={{
            flexDirection: flexDirection,
            padding: padding,
            paddingTop: paddingVertical || padding,
            paddingBottom: paddingVertical || padding,
            gap: gap,
            justifyContent: justifyContent,
            alignItems: alignItems
        }}>
            {children}
        </div>
    );
}

export { WrapperContainer1, WrapperContainer2, WrapperContainer3 };