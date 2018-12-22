import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Resolution from "./Resolution";

class ResolutionList extends React.Component {
  render() {
    return (
      <>
        {Object.keys(this.props.resolutions).length > 0 ? (
          <TransitionGroup component="ul" className="resolutions">
            {Object.keys(this.props.resolutions).map((item, i) => {
              if (this.props.resolutions[item])
                return (
                  <CSSTransition
                    classNames="resolution"
                    key={i}
                    timeout={{ enter: 200, exit: 200 }}
                  >
                    <Resolution
                      key={i}
                      index={item}
                      resolution={this.props.resolutions[item]}
                      deleteRes={this.props.deleteRes}
                      isOwner={this.props.isOwner}
                    />
                  </CSSTransition>
                );
              else return null;
            })}
          </TransitionGroup>
        ) : (
          <p className="message">
            Looks like you haven't made any resolutions yet. Get those ideas
            brewing!
          </p>
        )}
      </>
    );
  }
}

export default ResolutionList;
