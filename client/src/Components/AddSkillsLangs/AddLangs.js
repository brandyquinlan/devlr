import React, { useRef } from 'react'
function AddLangs(props) {
  const langRef = useRef()
  return (
    <div>
      <div className="tab gradient" style={{ border: 'none' }}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Language"
            aria-label="lang"
            aria-describedby="addLang"
            ref={langRef}
          ></input>
          <div className="input-group-append">
            <button
              className="btn btn-secondary"
              type="button"
              id="addLang"
              onClick={(e) => props.addLang(e, langRef.current.value)}
            >
              Add Language
            </button>
          </div>
        </div>
        <div>
          <ul>
            {!props.newLangs ? (
              <li>Add some languages in the box above!</li>
            ) : (
              props.newLangs.map((lang, index) => (
                <li key={lang}>
                  {lang}{' '}
                  <button
                    type="button"
                    data-value={lang}
                    className="btn-secondary"
                    onClick={(e) => props.removeLang(e, index)}
                  >
                    <span
                      className="material-icons remove"
                      style={{ fontSize: '20px' }}
                    >
                      clear
                    </span>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default AddLangs
