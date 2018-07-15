import React, { Component } from 'react'
import Button from '../Atoms/Button'

class PrevArea extends Component {

  onClickButton () {
    this.props.survey.actions.prev()
  }

  render() {
    return (
      <div className="col-sm-6 col-md-6">
        {(() => {
          const button = (this.props.survey.survey.answers.length > 0) ?
            <Button name="Prev" onClickButton={() => this.onClickButton()} className="btn btn-primary survey__content_prev" /> :
            null
          return button
        })()}
      </div>
    )
  }
}

export default PrevArea
