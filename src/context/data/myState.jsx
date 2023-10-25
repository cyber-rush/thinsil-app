import { useEffect, useState } from 'react'
import MyContext from './myContext'
import { QuerySnapshot, Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { fireDB } from '../../firebase/FirebaseConfig'


const myState = ({ children }) => {
    const [mode, setMode] = useState('light')

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = 'rgb(17, 24, 39)';
        }
        else {
            setMode('light')
            document.body.style.backgroundColor = '#fff';
        }
    }

    const [loading, setLoading] = useState(false)

    const [products, setProducts] = useState({
        title: null,
        price: null,
        imageUrl: null,
        category: null,
        description: null,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    })

    const addProduct = async () => {
        if (products.title === null || products.price === null || products.imageUrl === null || products.category === null || products.description === null) {
            return toast.error("All fields are required")
        }
        setLoading(true)
        try {
            const productRef = collection(fireDB, 'products')
            await addDoc(productRef, products)
            toast.success("Product added sucessfully")

            setTimeout(() => {                                //Redirects the user to dashboard page once the producted is added
                window.location.href = '/dashboard'
            }, 8000)
            getProductData()
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const [product, setProduct] = useState([])

    const getProductData = async () => {

        setLoading(true)
        try {
            const q = query(
                collection(fireDB, 'products'),
                orderBy('time')
            )

            const data = onSnapshot(q, (QuerySnapshot) => {
                let productArray = []
                QuerySnapshot.forEach((doc) => {
                    productArray.push({ ...doc.data(), id: doc.id })
                })

                setProduct(productArray)
                setLoading(false)
            })

            return () => data
        }
        catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getProductData()
    }, [])

    //update product function
    const editHandle = (item) => { //When the edit button is clicked this function is triggered and it will redirect the user to the update product page with the values set as that of the item in the input fields. from thereonwards you can change the values as required
        setProducts(item)
        console.log(item)
    }

    //update prosuct
    const updateProduct = async () => {
        setLoading(true)
        try {
            await setDoc(doc(fireDB, 'products', products.id), products)
            toast.success('Product updated successfully')
            getProductData() // for instant update

            setTimeout(() => {
                window.location.href = '/dashboard'
            }, 8000)

            setLoading(false)
        } catch (error) {
            console.error(error)
            toast.error('Error updating product')
            setLoading(false)
        }
    }

    // delete product
    const deleteProduct = async (item) => {
        console.log(item)
        setLoading(true)
        try {
            await deleteDoc(doc(fireDB, 'products', item.id))
            toast.success('Product deleted successfully')
            getProductData()
            setLoading(false)
        } catch (error) {
            console.error(error)
            toast.error('Error deleting product')
            setLoading(false)
        }
    }

    const [order, setOrder] = useState([]);

    const getOrderData = async () => {
        setLoading(true)
        try {
            const result = await getDocs(collection(fireDB, "order"))
            const ordersArray = [];
            result.forEach((doc) => {
                ordersArray.push(doc.data());
                setLoading(false)
            });
            setOrder(ordersArray);
            console.log(ordersArray)
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    useEffect(() => {
        getProductData();
        getOrderData()

    }, []);

    const [user, setUser] = useState([]);

    const getUserData = async () => {
        setLoading(true)
        try {
            const result = await getDocs(collection(fireDB, "users"))
            const usersArray = [];
            result.forEach((doc) => {
                usersArray.push(doc.data());
                setLoading(false)
            });
            setUser(usersArray);
            console.log(usersArray)
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }




    useEffect(() => {
        getOrderData();
        getUserData();
    }, []);

    return (
        <MyContext.Provider value={{ mode, toggleMode, loading, setLoading, products, setProducts, addProduct, product, editHandle, updateProduct, deleteProduct, order, user }}>
            {children}
        </MyContext.Provider>
    )
}

export default myState

