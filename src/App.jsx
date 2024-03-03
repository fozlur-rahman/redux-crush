import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import Posts from "./components/Posts";
import Stats from "./components/Stats";
import { decrement, increment } from "./features/counters/counterslice";

const initailCounters = [
    { id: "1", value: 0 },
    { id: "2", value: 0 },
];

function App() {
    const counters = useSelector((state) => state.counters);
    const dispatch = useDispatch();

    const handleIncrement = (counterId) => {
        dispatch(increment(counterId));
    };
    const handleDeccrement = (counterId) => {
        dispatch(decrement(counterId));
    };

    const totalCount = counters.reduce((sum, current) => current.value + sum, 0);
    return (
        <>
            <div className="h-screen w-screen bg-gray-100 text-slate-700 pt-10">
                <h1 className="text-center text-2xl text-gray-500 mb-10">
                    Simple Counter App USing Redux
                </h1>
                <div className="max-w-md mx-auto text-center text-2xl font-bold space-y-5">
                    {counters.map((counter) => (
                        <Counter
                            key={counter.id}
                            count={counter.value}
                            onIncrement={() => handleIncrement(counter.id)}
                            onDecrement={() => handleDeccrement(counter.id)}
                        />
                    ))}
                    <Stats totalCount={totalCount} />
                </div>
            </div>
            <Posts />
        </>
    );
}

export default App;
