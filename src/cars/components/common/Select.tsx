import * as React from 'react';
import './Select.scss';

interface IProps {
  options: Array<{ label: string; value?: string; checked?: boolean }>;
  select: (value?: string) => void;
}

export class Select extends React.Component<IProps> {
  public state = {
    opened: false
  };

  public toggle = () => this.setState({ opened: !this.state.opened });

  public onSelect = (value: string) => () => {
    this.props.select(value);
    this.toggle();
  };

  public render() {
    const props = this.props;
    let img_class = 'select-box__icon ';
    img_class = this.state.opened ? img_class + 'select-box__open' : img_class;
    return (
      <div className='select'>
        <div className='select-box' onClick={this.toggle}>
          <div className='title'>
            {props.options.find(option => option.checked).label}
            <img className={img_class} src='http://cdn.onlinewebfonts.com/svg/img_295694.svg' alt='Arrow Icon' />
          </div>
        </div>
        {this.state.opened && (
          <ul className='options'>
            {props.options.map((option, index) => (
              <li key={index} onClick={this.onSelect(option.value)}>
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
