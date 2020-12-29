import React from 'react';

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { span: null };
    this.divRef = React.createRef();
    this.imgRef = React.createRef();
  }

  componentDidMount() {
    // 這個時候雖然有 ref 的資料，可是 image 還沒有 render 在畫面上
    // 所以要等它 loading 完成才可以執行 symanic span 的 callback function
    this.imgRef.current.addEventListener('load', this.setSpan);
  }

  setSpan = () => {
    const spans = this.imgRef.current.clientHeight +20;

    this.setState({ spans });
  }

  render() {
    const {urls, description } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imgRef} src={urls.regular} alt={description}/>
      </div>
    )
  }
}