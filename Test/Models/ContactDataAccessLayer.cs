using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Test.Models
{
    public class ContactDataAccessLayer
    {
        TestDBContext db = new TestDBContext();

        public IEnumerable<Contact> GetAllContacts()
        {
            try
            {
                return db.Contact.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To Add new Contact record   
        public int AddContact(Contact Contact)
        {
            try
            {
                db.Contact.Add(Contact);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar Contact  
        public int UpdateContact(Contact Contact)
        {
            try
            {
                db.Entry(Contact).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular Contact  
        public Contact GetContactData(int id)
        {
            try
            {
                Contact Contact = db.Contact.Find(id);
                return Contact;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record of a particular Contact  
        public int DeleteContact(int id)
        {
            try
            {
                Contact emp = db.Contact.Find(id);
                db.Contact.Remove(emp);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        
    }
}