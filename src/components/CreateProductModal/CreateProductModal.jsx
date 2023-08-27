import styles from './CreateProductModal.module.sass';
import Overflow from '../Overflow/Overflow'
import { useMainContext } from '../../utils/context';
import { useState, useRef } from 'react';
import Input from '../Input/Input'
import plus from '@images/plus.svg'
import Dropdown from '../Dropdown/Dropdown.jsx';
import Confirm from '../Confirm/Confirm';
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from '../../actions/catalog';
import Toggle from '../Toggle/Toggle';
import MultiInput from '../MultiInput/MultiInput';

const CreateProductModal = () => {
    const dispatch = useDispatch();

    const { setAddNewProductOpen } = useMainContext();
    const inputRef = useRef(null);
    const modalRef = useRef(null);

    const categories = useSelector(state => state.categories);
    const [wasChanged, setChanged] = useState(false);
    const [isConfirmOpen, setConfirmOpen] = useState(false);
    const [images, setImages] = useState([]);
    const [productData, setProductData] = useState({
        name: "",
        category: "",
        description: "",
        feature: {
            effects: [],
            relieve: [],
            aromas: []
        },
        discount: "",
        remainder: 0,
        available: true,
        composition: [""],
        price: 1
    });

    const [productErrors, setProductErrors] = useState({
        name: "",
        category: "",
        description: "",
        feature: {
            effects: "",
            relieve: "",
            aromas: ""
        },
        discount: "",
        remainder: "",
        available: "",
        composition: "",
        price: "",
        images: ""
    });

    const handleFileInputChange = (event, file) => {
        setChanged(true);

        setImages(prev => prev.map(f => f == file ? event.target.files[0] : f));

    };

    const handleFileInputAdd = (event) => {
        setChanged(true);

        setImages(prev => [...prev, event.target.files[0]]);

        setProductErrors(prev => ({ ...prev, images: "" }));
    };

    const handleFileInputDelete = (file) => {
        setImages(prev => prev.filter(f => f !== file));

        inputRef.current.value = null;
    };

    const handleInputChange = (value, name, type) => {

        setChanged(true);

        setProductErrors(prev => ({ ...prev, [name]: "" }))

        setProductData(prevData => {
            return {
                ...prevData, [name]: type == "number" && Number(value) < 1 && value !== ""
                    ? name == "price"
                        ? 1
                        : value
                    : value
            };
        });
    }

    const handleOnSubmit = () => {
        let isCorrect = true;
        for (const key in productData) {
            const value = productData[key];
            if (typeof value === 'string' && value.trim() === '') {
                isCorrect = false;
                setProductErrors(prev => ({ ...prev, [key]: "The field must be filled" }))
                modalRef.current.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            } else if (Array.isArray(value)) {
                if (value.length === 0) {
                    isCorrect = false;
                    setProductErrors(prev => ({ ...prev, [key]: "The field must be filled" }))
                    modalRef.current.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                } else if (value[0].length == 0) {
                    isCorrect = false;
                    setProductErrors(prev => ({ ...prev, [key]: "The field must be filled" }))
                    modalRef.current.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                }
            }
        }

        if (images.length == 0) {
            isCorrect = false;
            setProductErrors(prev => ({ ...prev, images: "The field must be filled" }))
            modalRef.current.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

        if (!isCorrect) {
            return false;
        }

        const data = new FormData();

        images.forEach((file, index) => {
            data.append(`image[${index}]`, file);
        });

        for (let key in productData) {
            data.append(key, productData[key]);
        }

        dispatch(createProduct(data));
    }

    const handleCloseModal = () => {
        if (wasChanged) {
            setConfirmOpen(true);
        } else {
            setAddNewProductOpen(false)
        }
    }

    return (
        <Overflow close={() => handleCloseModal()}>
            <div className={styles.modal} ref={modalRef}>
                <div className={styles.header}>
                    <h3 className={styles.title}>
                        Add new product
                    </h3>
                    <button onClick={handleCloseModal}>
                        close
                    </button>
                </div>

                <div className={styles.inner}>
                    <div className={styles.images}>
                        {images.map(file => (
                            <div className={styles.image} key={file.name}>
                                <input accept="image/*,.png,.jpg,.gif,.web," type="file" onChange={(e) => handleFileInputChange(e, file)} />

                                <div className={styles.image_block}>
                                    <img src={URL.createObjectURL(file)} alt="Selected" />
                                </div>

                                <button onClick={() => handleFileInputDelete(file)} className={styles.delete}>delete</button>
                            </div>
                        ))}

                        <div className={`${styles.image} ${productErrors.images.length > 0 ? styles.image_error : ""}`}>
                            <input accept="image/*,.png,.jpg,.gif,.web," ref={inputRef} type="file" onChange={handleFileInputAdd} />
                            <img className={styles.plus} src={plus} alt="" />
                        </div>

                    </div>

                    <Input
                        label="Name"
                        value={productData.name}
                        placeholder="Name"
                        type="text"
                        name="name"
                        setValue={handleInputChange}
                        error={productErrors.name}
                        isForm={true}
                    />

                    <Dropdown
                        label="Category"
                        value={productData.category}
                        name="category"
                        setValue={handleInputChange}
                        error={productErrors.category}
                        options={categories}
                    />

                    <Input
                        label="Description"
                        value={productData.description}
                        placeholder="Product description"
                        type="textarea"
                        name="description"
                        setValue={handleInputChange}
                        error={productErrors.description}
                        isForm={true}
                    />

                    {/* <Input
                        label="Feature"
                        value={productData.feature}
                        placeholder="Product feature"
                        type="text"
                        name="feature"
                        setValue={handleInputChange}
                        error={productErrors.feature}
                        isForm={true}
                    /> */}

                    <Input
                        label="Discount"
                        value={productData.discount}
                        placeholder="Product discount"
                        type="text"
                        name="discount"
                        setValue={handleInputChange}
                        error={productErrors.discount}
                        isForm={true}
                    />
                    <Input
                        label="Remainder"
                        value={productData.remainder}
                        placeholder="Product remainder"
                        type="number"
                        name="remainder"
                        setValue={handleInputChange}
                        error={productErrors.remainder}
                        isForm={true}
                    />

                    <Toggle
                        label="Available"
                        value={productData.available}
                        name="available"
                        setValue={handleInputChange}
                    />

                    <MultiInput
                        label="Composition"
                        value={productData.composition}
                        placeholder="Product composition"
                        name="composition"
                        setValue={handleInputChange}
                        error={productErrors.composition}
                    />

                    <Input
                        label="Price"
                        value={productData.price}
                        placeholder="Product price"
                        type="number"
                        name="price"
                        setValue={handleInputChange}
                        error={productErrors.price}
                        isForm={true}
                    />
                </div>
                <button style={{ maxWidth: "300px", fontSize: "14px", margin: "20px auto" }} className='green-btn' onClick={handleOnSubmit}>Create</button>
            </div>

            {isConfirmOpen && <Confirm
                alert="Your changes will not be saved if you exit"
                cancel={() => setConfirmOpen(false)}
                onSubmit={() => setAddNewProductOpen(false)}
                btnText="Exit"
            />}

        </Overflow>
    );
}

export default CreateProductModal;