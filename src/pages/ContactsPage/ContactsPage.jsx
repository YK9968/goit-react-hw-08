import { selectIsError, selectIsLoading } from "../../redux/contacts/selectors";
import { fetchAllContacts } from "../../redux/contacts/operations";
import css from "./ContactsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);
  return (
    <div>
      <div className={css.loaderContainer}>
        <h1 className={css.mainTitle}>Phonebook</h1>
        {isLoading && <Loader />}
        {isError && <Error />}
      </div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
