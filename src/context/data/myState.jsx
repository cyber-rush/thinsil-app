import { useEffect, useState } from 'react'
import MyContext from './myContext'
import { QuerySnapshot, Timestamp, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore'
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
                    productArray.push({ ...doc.data(), id: doc.title })
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

    return (
        <MyContext.Provider value={{ mode, toggleMode, loading, setLoading, products, setProducts, addProduct, product }}>
            {children}
        </MyContext.Provider>
    )
}

export default myState

