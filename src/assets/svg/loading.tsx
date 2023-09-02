export const LoadingSvg = () => (
    <svg
        version="1.1"
        id="L3"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 0 0"
        style={{
            width: "50px",
            height: "50px"
        }}
    >
        <circle
            cx="50"
            cy="50"
            r="44"
            style={{ 
                opacity: "0.5",
                fill: "none",
                stroke: "#AAA",
                strokeWidth: "7"
            }}
        />
        <circle
            cx="8"
            cy="54"
            r="6"
            style={{
                fill: "#AAA",
            }}
        >
            <animateTransform
                attributeName="transform"
                dur="2s"
                type="rotate"
                from="0 50 48"
                to="360 50 52"
                repeatCount="indefinite"
            />
        </circle>
    </svg>
)