import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        overflow: 'auto',
        maxHeight: '95%',
        transform: 'translate(-50%, -50%)'
    }
};

class ModalForm extends React.Component {
    closeModal = () => {
        if (this.props.setClosed) {
            this.props.setClosed()
        }
    }

    render() {
        const {isOpen, title, width, className} = this.props
        let {icon} = this.props
        let width_fixed = "900px"

        if (typeof icon !== "undefined") {
            icon = <i className={"fal " + icon + " blue"}/>
        }

        if (typeof width !== "undefined")
            width_fixed = width

        return (
            <div>
                <Modal
                    className={className}
                    isOpen={isOpen}
                    ariaHideApp={false}
                    onRequestClose={() => {
                        this.closeModal()
                    }}
                    style={customStyles}
                >
                    <div style={{"width": width_fixed}} className="ModalContent">
                        <div className="modal-body">
                            <div className="modal-close-btn" onClick={() => {
                                this.props.setClosed()
                            }}>
                            </div>
                            {typeof title !== "undefined" && <div><h5> {icon} {title}</h5>
                                <hr/>
                            </div>}
                            {this.props.children}
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default ModalForm
