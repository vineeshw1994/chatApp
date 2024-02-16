
const GenderCheckbox = () => {
  return (
    <div className="flex">
        <div className="form-controll">
            <label htmlFor="" className={`label gap-2 cursor-pointer`}>
                <span className="label-text">Male</span>
                <input type="checkbox" className="checkbox border-teal-900" />
            </label>
        </div>

        <div className="form-controll">
            <label htmlFor="" className={`label gap-2 cursor-pointer`}>
                <span className="label-text">Female</span>
                <input type="checkbox" className="checkbox border-teal-900" />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox