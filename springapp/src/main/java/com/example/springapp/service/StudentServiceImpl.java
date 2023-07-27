package com.example.springapp.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.springapp.Payloads.StudentDto;
import com.example.springapp.config.AppConstants;
import com.example.springapp.emailconfiguration.EmailUtil;
import com.example.springapp.model.OneTimePassword;
import com.example.springapp.model.Role;
import com.example.springapp.model.Student;
import com.example.springapp.repository.OtpDao;
import com.example.springapp.repository.RoleRepo;
import com.example.springapp.repository.StudentRepo;
@Service
public class StudentServiceImpl implements StudentService {
	
	private static boolean safe = false;
	
	
	@Autowired
	private StudentRepo studentdao;
	
    @Autowired
    private EmailUtil emailUtil;
    
    @Autowired
    private OtpDao otpDao;
	

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private RoleRepo roleRepo;


	@Override
	public  List<StudentDto> allstudents() {
		// TODO Auto-generated method stub
		
		
    	List<Student> allusers = this.studentdao.findAll();
    	
    	List<StudentDto> allreq =  new ArrayList<>();
    	
    	for(int i=0; i<allusers.size(); i++) {
    	allreq.add(this.modelMapper.map(allusers.get(i), StudentDto.class));
    	}
    	return allreq;
		
	}

	@Override
	public String addStudent(Student student) {
		// TODO Auto-generated method stub
		studentdao.save(student);
		return "Added";
		
	}

	@Override
	public StudentDto getStudent(int id) {
		// TODO Auto-generated method stub
		Student student = studentdao.findById(id).orElseThrow(()->new RuntimeException("User Id is not found"));
		
		StudentDto user = this.modelMapper.map(student, StudentDto.class);
		
		return user;
	}

	@Override
	public Student updateStudent(int id ,Student user) {
	      Student userupdate = studentdao.findById(id)
	                .orElseThrow(()-> new RuntimeException("User not found"));
	        if (user.getFirstName()!=null){userupdate.setFirstName(user.getFirstName());}
	        if (user.getEmail()!=null){userupdate.setEmail(user.getEmail());}
	        if (user.getLastName()!=null){userupdate.setLastName(user.getLastName());}
	        if (user.getPhoneNumber()!=null){userupdate.setPhoneNumber(user.getPhoneNumber());}
	        if (user.getAddress()!=null){userupdate.setAddress(user.getAddress());}


	        return studentdao.save(userupdate);
	}

	@Override
	public void deleteStudent(int id) {
		// TODO Auto-generated method stub
		Student Stu = studentdao.findById(id).get(); 
		studentdao.delete(Stu);
		
	}

	@Override
	public StudentDto registerNewUser(StudentDto Studentdto) {
		Student user = this.modelMapper.map(Studentdto, Student.class);

		// encoded the password
		user.setPassword(this.passwordEncoder.encode(user.getPassword()));

		// roles
		Role role = this.roleRepo.findById(AppConstants.NORMAL_USER).get();

		user.getRoles().add(role);

		Student newUser = this.studentdao.save(user);

		return this.modelMapper.map(newUser, StudentDto.class);
	}

	@Override
	public StudentDto registerNewAdmin(StudentDto Studentdto) {
		Student user = this.modelMapper.map(Studentdto, Student.class);

		// encoded the password
		user.setPassword(this.passwordEncoder.encode(user.getPassword()));

		// roles
		Role role = this.roleRepo.findById(AppConstants.ADMIN_USER).get();

		user.getRoles().add(role);

		Student newUser = this.studentdao.save(user);

		return this.modelMapper.map(newUser, StudentDto.class);
	}
	


	@Override
    public String forgotPassword(String email) throws javax.mail.MessagingException {
        Student users = this.studentdao.findByUserEmail(email);
        if (users == null) {
            throw new RuntimeException("Invalid email");
        }

        OneTimePassword otp = this.otpDao.findByUserId(users.getId());
        boolean isNewOTP = false;

        if (otp == null) {
            otp = new OneTimePassword();
            otp.setStudent(users);
            isNewOTP = true;
        }

        otp.setOtpValue(generateOtp());
        otp.setExpirationTime(LocalDateTime.now().plusMinutes(10));

        this.otpDao.save(otp);

        emailUtil.sendSetPasswordViaEmail(email, otp.getOtpValue());

        if (isNewOTP) {
            return "OTP has been sent to your email address.";
        } else {
            return "OTP has been resent to your email address.";
        }
    }


    private String generateOtp() {

        int otpValue = (int) (Math.random() * (999999-100000+1) +100000); // Generate a random 6-digit OTP
        return String.valueOf(otpValue);
        }



    @Override
    public String verifyOtp(String email, String otp) {

        Student users = this.studentdao.findByUserEmail(email);
        OneTimePassword oTp = this.otpDao.getOtpByUserId(users.getId());

        LocalDateTime currentDate = LocalDateTime.now();

        if(otp.equals(oTp.getOtpValue()) && oTp.getExpirationTime().isAfter(currentDate)){
        	//StudentServiceImpl.safe = true;
            return "otp has been successfully verified.";
            
        }
        
        //StudentServiceImpl.safe=false;
        return "Incorrect password or time has expired";
    }

 // setting the users new Password

    @Override
    public String setPassword(String email, String newPassword) {
    	
    	
    	
    	System.out.println(StudentServiceImpl.safe);
//    	
//    	if(StudentServiceImpl.safe) {
            Student users = this.studentdao.findByUserEmail(email);

            users.setPassword(this.passwordEncoder.encode(newPassword));
            this.studentdao.save(users);
            return "Password has been changed successfully";
//    	}
//    	else {
//    		return "Please verify otp";
//    	}

    }


}
