using System;
using System.Collections.Generic;

namespace Test.Models
{
    public partial class Contact
    {
        public int ContactId { get; set; }
        public string ContactName { get; set; }
        public string Address { get; set; }
        public string PhoneNo { get; set; }
        public string Email { get; set; }
        public int? Age { get; set; }
        public string Country { get; set; }
        public string Facebook { get; set; }
        public string Twitter { get; set; }
        public string Linkedin { get; set; }
    }
}
