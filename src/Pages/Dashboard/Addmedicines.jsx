import { Helmet } from 'react-helmet-async'
import Axiossecure from '../../Hooks/Axiossecure';
import { useContext, useState } from 'react';
import Entryform from '../../Components/Dashboard/Entryform';
import { imageUpload } from '../../Components/Api/Utility';
import toast from 'react-hot-toast';
import Authcontext from '../../Context/Authcontext';

const Addmedicines = () => {
    const { user } = useContext(Authcontext)
    const axiosSecure = Axiossecure()
    const [uploadImage, setUploadImage] = useState({
      image: { name: 'Upload Button' },
    })
    console.log(uploadImage)
    const [loading, setLoading] = useState(false)
    // handle form submit
    const handleSubmit = async e => {
      e.preventDefault()
      setLoading(true)
      const form = e.target
      const name = form.name.value
      const genericname = form.genericname.value
      const description = form.description.value
      const category = form.category.value
      const company = form.company.value
      const price = parseFloat(form.price.value)
      const quantity = parseInt(form.quantity.value)
      const discount = parseInt(form.discount.value)
      const image = form.image.files[0]
      const imageUrl = await imageUpload(image)
  
      // seller info
      const seller = {
        name: user?.displayName,
        image: user?.photoURL,
        email: user?.email,
      }
  
      // Create plant data object
      const medicinesData = {
        name,
        genericname,
        category,
        company,
        description,
        price,
        quantity,
        discount,
        image: imageUrl,
        seller,
      }
  
      console.table(medicinesData)
      // save plant in db
      try {
        // post req
        await axiosSecure.post('/medicines', medicinesData)
        toast.success('Data Added Successfully!')
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    return (
   <>
     <div>
      <Helmet>
        <title>Add Plant | Dashboard</title>
      </Helmet>

      {/* Form */}
      <Entryform
      handleSubmit={handleSubmit}
      uploadImage={uploadImage}
      setUploadImage={setUploadImage}
      loading={loading}></Entryform>
    </div>
   </>
    );
};

export default Addmedicines;