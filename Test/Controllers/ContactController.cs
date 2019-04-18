using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Test.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Test.Controllers
{

    public class ContactController : Controller
    {
        ContactDataAccessLayer objContact = new ContactDataAccessLayer();

        [HttpGet]
        [Route("api/Contact/Index")]
        public IEnumerable<Contact> Index()
        {
            return objContact.GetAllContacts();
        }

        [HttpPost]
        [Authorize(Roles = "User, Admin")]
        [Route("api/Contact/Create")]
        public int Create([FromBody] Contact Contact)
        {
            return objContact.AddContact(Contact);
        }

        [HttpGet]
        [Authorize(Roles = "User, Admin")]
        [Route("api/Contact/Details/{id}")]
        public Contact Details(int id)
        {
            return objContact.GetContactData(id);
        }

        [HttpPut]
        [Authorize(Roles = "User, Admin")]
        [Route("api/Contact/Edit")]
        public int Edit([FromBody]Contact Contact)
        {
            return objContact.UpdateContact(Contact);
        }

        [HttpDelete]
        [Authorize(Roles = "User, Admin")]
        [Route("api/Contact/Delete/{id}")]
        public int Delete(int id)
        {
            return objContact.DeleteContact(id);
        }

    }
}