import React from 'react';
import AlbumIndexContainer from '../album/album_index_container';
import AlbumFormContainer from '../album/album_form_container';
import Modal from 'react-modal';
import ModalStyle from './modal_style'


class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state = { modalOpen: false, album:
      {title: "",
       description: "",
       author_id: parseInt(this.props.params.profileId)} };
    this.onModalClose = this.onModalClose.bind(this)
    this.onModalOpen = this.onModalOpen.bind(this)
  }

  onModalClose(){
    this.setState({modalOpen: false});
    ModalStyle.content.opacity = 0;
  }
  onModalOpen(){
    ModalStyle.content.opacity = 100;
    ModalStyle.content.background
  }

  _handleClick() {
    this.setState({ modalOpen: true});
  }

  update(property) {
    return e => this.setState({album:{[property]: e.target.value}});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createAlbum(this.state.album);
  }


  render(){
    const profUser = (id) => {
      let result = ''
      this.props.user.map(x => {
        if (id === x.id) {
          result = x;
        }
      })
      return result;
    }

    const thisProf = profUser(parseInt(this.props.params.profileId))

    return(
      <div className="prof-container">
        <div className="prof-header">
          <div className="prof-main-pic"><img src={thisProf.profile_pic}/></div>
          <h1>{thisProf.username}</h1>
          { this.props.currentUser.id === thisProf.id ? <button className="album-button" onClick={this._handleClick.bind(this)}>Add Album</button> : <a/> }
        </div>
        <div className="album-grid">
          <h1 className="explore-text">ALBUMS</h1>
          <AlbumIndexContainer prof={thisProf}/>
        </div>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ModalStyle}
          onAfterOpen={this.onModalOpen}>
          <a className="modal-close" onClick={this.onModalClose}><img src="http://res.cloudinary.com/dt5viyxyq/image/upload/c_scale,h_41/v1472778565/x_alt-128_p7d2vo.png"/></a>

          <div className='modal-container'>
            <AlbumFormContainer profileId={parseInt(this.props.params.profileId)}/>
          </div>
        </Modal>
      </div>
    )
  }
}


export default Profile;
