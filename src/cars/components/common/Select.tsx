import * as React from 'react';
import './Select.scss';

interface IProps {
  options: Array<{label: string; value?: string; checked?: boolean}>;
  select: (value?: string) => void;
}

export class Select extends React.Component<IProps> {
  public state = {
    opened: false,
  };

  public toggle = () => this.setState({opened: !this.state.opened});

  public render() {
    const props = this.props;
    let img_class = "select-box__icon ";
    if (this.state.opened) img_class = img_class + "select-box__open"
    return (
      <div className="select">
        <div className="select-box" onClick={this.toggle}>
          <div className="title">
            {props.options.find(option => option.checked).label}
            <img
              className={img_class}
              src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
              alt="Arrow Icon"
            />
          </div>
        </div>
        {this.state.opened && (
          <ul className="options">
            {props.options.map(option => <li onClick={() => {
              props.select(option.value);
              this.toggle();
            }}>{option.label}</li>)}
          </ul>
        )}
      </div>
    );
  }
}
