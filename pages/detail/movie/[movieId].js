import React, { useEffect, useState } from "react";
import Head from 'next/head'
import { useRouter } from "next/router";
import styles from '../../../styles/Home.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getDetailMovieService } from "../../../redux/services/detailMovieService";
import Description from "../../../components/molecules/Description";
import { Modal } from 'antd';
import Rating from "../../../components/atoms/Rating";
import { setRatingMovieService } from "../../../redux/services/ratingMovieService";


const DetailMovie = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { movieId } = router.query
    const { data, loading } = useSelector((state) => state.detailMovie)
    const { data: ratingStatus, error} = useSelector((state) => state.ratingMovie)
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Please Give a Rate as you want!');
    const [value, setValue] = useState(8)  
    const showModal = () => {
      setOpen(true);
    };
  
    const handleOk = () => {
      setModalText('Rating on progress..');
      setConfirmLoading(true);
      dispatch(setRatingMovieService(movieId, value))
    };
  
    const handleCancel = () => {
      setOpen(false);
    };

    useEffect(() => {
        if (movieId) {
            dispatch(getDetailMovieService(movieId))
        }
    }, [movieId])

    useEffect(() => {
        setValue(data.vote_average)
    }, [data])

    useEffect(() => {
        setModalText('Success!');
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
            setModalText('Please Give a Rate as you want!')
          }, 2000);
    }, [ratingStatus])

    useEffect(() => {
        if (error) {
            setModalText(error.data.status_message)
            setTimeout(() => {
                setOpen(false);
                setConfirmLoading(false);
                setModalText('Please Give a Rate as you want!')
              }, 3000);
        }
    }, [error])
    return(
        <>
        <Head>
            <title>Detail Movie</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
         <main className={styles.main}>
            <h1 className={styles.title}>
                Movie App
            </h1>
            {data ? <Description data={data} onClickRating={() => showModal()}/> : ''}
            <Modal
                title="Vote a Rating"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>
                {modalText}
                </p>
                <Rating disable={false} onChange={(v) => {setValue(v)}} value={value} label={false}/>
            </Modal>
        </main>
      </>
    )
}

export default DetailMovie;