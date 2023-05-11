import "./app-filter.css";

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button type="button"
                    className="btn btn-light">
                    All employees
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                Promotion
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                   Salary more than $1000
            </button>
        </div>
    )
}

export default AppFilter;

// Path: src\components\app-filter\app-filter.js
