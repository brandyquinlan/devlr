import React, { useRef } from 'react'
import NoExpandTab from '../NoExpandTab'
function AddLangs(props) {
  const langRef = useRef()
  return (
    <div>
      <NoExpandTab title="Add Languages">
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
              className="btn btn-outline-secondary"
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
                    className="bg-danger"
                    onClick={(e) => props.removeLang(e, index)}
                  >
                    x
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </NoExpandTab>
    </div>
  )
}
export default AddLangs
