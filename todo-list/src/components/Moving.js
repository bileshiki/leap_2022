export default function Moving () {
    const [shapes, setShapes] = useState(randomShapes);
    const [txtShapes, setTxtShapes] = useState("Start");

    const onMovingDown = (e) => {
        setTxtShapes("Started");

        const newShapes = shapes.map((shape) => {
            if (shape.type === "square") {
                return shape;
            } else {
                if (e.key === "ArrowDown") {
                    return { ...shape, y: shape.y + 50 };
                } else if (e.key === "ArrowUp") {
                    return { ...shape, y: shape.y -50};
                } else if (e.key === "ArrowLeft") {
                    return {... shape, x: shape.x -50}
                } else if (e.key === "ArrowRight") {
                    return { ...shape, x: shape.x +50, color: "grey"};
                }
            }
        });
        setShapes(newShapes);
    };
    return (
        <div>
            <button onKeyDown={onMovingDown}>{txtShapes}</button>
            {shapes.map(({ id, type, x, y, color }) => {
                return (
                    <div 
                        key={id} 
                        style={{ 
                            position: "absolute", 
                            width: "20px", 
                            height: "20px", 
                            backgroundColor: color, 
                            borderRadius: type !== "square" ? "50%" : "", 
                            left: x, 
                            top: y,
                        }} 
                    />
                );
            })}
        </div>
    );
}