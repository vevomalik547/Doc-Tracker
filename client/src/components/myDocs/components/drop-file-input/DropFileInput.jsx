import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './drop-file-input.css';
import { ImageConfig } from '../../config/ImageConfig';
import uploadImg from '../../assets/cloud-upload-regular-240.png';
import { AddImageToIPFS } from '../../../../services/IpfsService';
import { NIFTRON } from "niftron-client-sdk";
import { addDoc } from '../../../../api';
import { addHash } from '../../../../blockchain';
import jsonwebtoken from "jsonwebtoken";

const DropFileInput = props => {
    const wrapperRef = useRef(null);
    const [fileList, setFileList] = useState([]);
    const [ipfsHashList, setIpfsHashList] = useState([]);
    const [publicKey, setPublicKey] = useState(null);

    const fetchUser = async () => {
        if (localStorage.getItem("niftoken")) {
            const token = localStorage.getItem("niftoken");
            if (token) {
                const decodedToken = jsonwebtoken.decode(token);
                if (decodedToken) {
                    setPublicKey(decodedToken.publicKey)
                } else {
                    setPublicKey(null)
                }
            }
        }
    };

    useEffect(() => {
        fetchUser()
    }, [])

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }

    const upload = async () => {

        const updatedList = [...fileList];
        console.log(updatedList)

        const secret = await NIFTRON.tokenBuilder.approvalPopUp()
        if (secret) {
            console.log(secret)
            let ipfsHashL = []
            for (var i = 0; i < updatedList.length; i++) {
                const ipfsHash = await AddImageToIPFS(updatedList[i])

                try {
                    const txnRes = await addHash(ipfsHash.ipfsHash, secret)
                    const txnObject = { transaction: txnRes }
                    const docJson = {
                        name: updatedList[i].name,
                        size: updatedList[i].size,
                        publicKey,
                        ipfsHash: ipfsHash.ipfsHash,
                        ipfsURL: `https://ipfs.infura.io/ipfs/${ipfsHash.ipfsHash}`,
                        txnHash: txnRes,
                        txnURL: `https://laboratory.stellar.org/#explorer?resource=transactions&endpoint=single&values=${encodeURIComponent(btoa(JSON.stringify(txnObject)))}&network=test`,
                        blockchain: "STELLARTESTNET",
                    }
                    ipfsHashL.push(docJson)

                    const res = await addDoc(docJson)
                } catch (e) {
                    console.log(e)
                }
            }
            setIpfsHashList(ipfsHashL)
        }
        // updatedList.splice(fileList.indexOf(file), 1);
        // setFileList(updatedList);
        // props.onFileChange(updatedList);
    }

    return (

        <>
            <div
                ref={wrapperRef}
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="drop-file-input__label">
                    <img src={uploadImg} alt="" />
                    <p>Drag & Drop your file here</p>
                </div>
                <input type="file" value="" onChange={onFileDrop} />
            </div>
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">
                        <p className="drop-file-preview__title">
                            Ready to upload
                        </p>
                        {
                            fileList.map((item, index) => (
                                <div key={index} className="drop-file-preview__item">
                                    <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                    <div className="drop-file-preview__item__info">
                                        <p><b>Name:</b> {item.name}</p>
                                        <p><b>Size: </b>{item.size / 1000}KB</p>
                                    </div>
                                    <button className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</button></div>
                            ))
                        }
                    </div>
                ) : null
            }
            {
                fileList.length > 0 ? (
                    <button
                        className='uploadbtn'
                        onClick={() => upload()}>Upload Files</button>
                ) : null
            }

            {
                ipfsHashList.length > 0 && ipfsHashList.map((item, index) => (
                    <div key={index} className="drop-file-preview__item">
                        <br />
                        {/* <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" /> */}
                        <div className="drop-file-preview__item__info">

                            <h3>{item.name}</h3>
                            {/* Link to retrieve the uploaded files in IPFS */}
                            <a href={item.ipfsURL} target="_blank">IPFSHASH: {item.ipfsHash}</a>
                            <a href={item.txnURL} target="_blank">TXNHASH: {item.txnHash}</a>

                        </div>

                    </div>
                ))
            }
        </>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default DropFileInput;
