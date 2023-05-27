import React from "react";
import Table from "react-bootstrap/Table";

const Courseplan = () => {
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>বিষয়</th>
            <th>নাম্বার </th>
            <th>ক্লাস সংখ্যা </th>
            <th>ক্লাস টেস্ট</th>
            <th>লেকচার শিট</th>
            <th>এসাইনমেন্ট টেস্ট</th>
            <th>বিসয়ভিওিক টেস্ট</th> 
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>বাংলা ভাষা </td>
            <td>১৫</td>
            <td>০৮ টি </td>
            <td>১০ টি</td>
            <td>১০ টি</td>
            <td>১ টি</td>
            <td>১ টি</td>
          </tr>
          <tr>
          <td>বাংলা সাহিত্য </td>
            <td>২০</td>
            <td>১১ টি </td>
            <td>১১ টি</td>
            <td>১১ টি</td>
            <td>১ টি</td>
            <td>১ টি</td>
          </tr>
          <tr>
          <td>English Language </td>
            <td>২০</td>
            <td>২৩ টি </td>
            <td>১৭ টি</td>
            <td>১৭ টি</td>
            <td>১ টি</td>
            <td>১ টি</td>
          </tr>
          <tr>
          <td>English Literature </td>
            <td>১৫</td>
            <td>০৭ টি </td>
            <td>০৭ টি</td> 
            <td>০৭ টি</td>
            <td>১ টি</td>
            <td>১ টি</td>
          </tr>
          <tr>
          <td>বাংলাদেশ বিষয়াবলি  </td>
            <td>৩০</td>
            <td>২০ টি </td>
            <td>১৬ টি</td>
            <td>১৬ টি</td>
            <td>২ টি</td>
            <td>১ টি</td>
          </tr>
          <tr>
          <td>আন্তর্জাতিক বিষয়াবলি </td>
            <td>২০</td>
            <td>১৩ টি </td>
            <td>১৩ টি</td>
            <td>১৩ টি</td>
            <td>১ টি</td>
            <td>১ টি</td>
          </tr>
          <tr>
          <td>ভূগোল (বাংলাদেশ ও বিশ্ব),পরিবেশ ও দুর্যোগ ব্যবস্তাপনা  </td>
            <td>১০</td>
            <td>০৭ টি </td>
            <td>০৭ টি</td>
            <td>০৭ টি</td>
            <td>১ টি</td>
            <td>১ টি</td>
          </tr>
          <tr>
          <td>সাধারন বিজ্ঞান </td>
            <td>১৫</td>
            <td>১২ টি </td>
            <td>১২ টি</td>
            <td>১২ টি</td>
            <td>১ টি</td>
            <td>১ টি</td>
          </tr>
          <tr>
          <td>কম্পিউটার ও তথ্য প্রযুক্তি   </td>
            <td>১৫</td>
            <td>০৮ টি </td>
            <td>০৮ টি</td>
            <td>০৮ টি</td>
            <td>১ টি</td>
            <td>১ টি</td>
          </tr>
          <tr>
          <td>গাণিতিক যুক্তি   </td>
            <td>১৫</td>
            <td>২৪ টি </td>
            <td>২৪ টি</td>
            <td>২১ টি</td>
            <td>১ টি</td>
            <td>১ টি</td>
          </tr>
          <tr>
          <td>মানসিক দক্ষতা   </td>
            <td>১৫</td>
            <td>০৬ টি </td>
            <td>০৬ টি</td>
            <td>০৬ টি</td>
            <td> - টি</td>
            <td>১ টি</td>
          </tr>
          <tr>
          <td>নৈতিকতা, মূল্যবোধ ও সু-শাসন  </td>
            <td>১০</td>
            <td>০৪ টি </td>
            <td>০৪ টি</td>
            <td>০৪ টি</td>
            <td>১ টি</td>
            <td>১ টি</td>
          </tr>
          <tr>
          <td>মোট ঃ </td>
            <td>২০০</td>
            <td>১৩৪ টি </td>
            <td>১৩০ টি</td>
            <td>১৩৪ টি</td>
            <td>১২ টি</td>
            <td>১২ টি</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Courseplan;
