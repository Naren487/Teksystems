package com.example.SportsShoe.controller;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.SportsShoe.entities.Category;
import com.example.SportsShoe.entities.Product;
import com.example.SportsShoe.entities.PurchaseReport_data;
import com.example.SportsShoe.entities.User;
import com.example.SportsShoe.repo.CategoryRepo;
import com.example.SportsShoe.repo.ProductRepo;
import com.example.SportsShoe.repo.PurchaseReportsRepo;
import com.example.SportsShoe.repo.UserRepository;

@Controller
public class UserController {

	// Repositorys Initialization
	@Autowired
	private UserRepository Userrepo;
	@Autowired
	private ProductRepo productRepo;

	@Autowired
	private CategoryRepo categoryRepo;

	@Autowired
	private PurchaseReportsRepo purchaseRepo;

	// User Controllers

	@GetMapping("/user/login")
	public String login(HttpSession session) {
		if (session.getAttribute("username") == null) {
			return "login";
		} else {
			return "home";
		}
	}

	@GetMapping("/user/logout")
	public String logout(HttpSession session) {
		session.removeAttribute("username");
		session.removeAttribute("number");
		session.removeAttribute("address");
		return "login";
	}

	@GetMapping("/user/viewProducts/{id}")
	public String viewProducts(@PathVariable String id, ModelMap model, HttpSession session) {
		if (session.getAttribute("username") == null) {

			return "login";
		} else {
			int id_ = Integer.parseInt(id.substring(1, id.length() - 1));
			Optional<Product> item = productRepo.findById(id_);
			Product product = item.get();
			model.addAttribute("product", product);
			System.out.println(id);
			return "viewProducts";
		}
	}

	@GetMapping("/user/register")
	public String register(HttpSession session) {
		if (session.getAttribute("username") == null) {
			return "register";
		} else {
			return "home";
		}
	}

	@PostMapping("/user/registeruser")
	public String registerUser(@ModelAttribute("user") User user, ModelMap model) {
		System.out.println(user);
		Userrepo.save(user);
		model.addAttribute("msg", "Registration Successful");
		return "login";
	}

	@PostMapping("/user/userLogin")
	public String userLogin(@ModelAttribute("number") String number, @ModelAttribute("password") String password,
			ModelMap model, HttpSession session) {
		System.out.println(number + password);
		Optional<User> user = Userrepo.findByNumberAndPassword(number, password);
		if (user.isPresent()) {
			User currentUser = user.get();
			model.addAttribute("msg", "Login Successful");
			session.setAttribute("username", currentUser.getName());
			session.setAttribute("number", number);
			session.setAttribute("address", currentUser.getAddress());
			return "redirect:/user/home";
		}
		return "login";
	}

	@GetMapping("/user/home")
	public String home(HttpSession session, ModelMap model) {
		if (session.getAttribute("username") != null) {
			model.addAttribute("username", session.getAttribute("username"));
			Iterable<Product> items = productRepo.findAll();
			Iterable<Category> cats = categoryRepo.findAll();
			model.addAttribute("categories", cats);
			model.addAttribute("items", items);
			return "home";
		} else {
			return "login";
		}
	}

	@GetMapping("/selectCategories/{name}")
	public String selectCategories(@PathVariable String name, ModelMap model) {
		name = name.substring(1, name.length() - 1);
		Iterable<Product> products = productRepo.findByCategory(name);
		model.addAttribute("items", products);
		Iterable<Category> cats = categoryRepo.findAll();
		model.addAttribute("categories", cats);
		return "home";

	}

	@GetMapping("/user/payment/{id}")
	public String payment(@PathVariable String id, ModelMap model, HttpSession session) {
		if (session.getAttribute("username") != null) {
			id = (id.substring(1, id.length() - 1));
			String name = (String) session.getAttribute("username");
			String number = (String) session.getAttribute("number");
			String address = (String) session.getAttribute("address");
			model.addAttribute("name", name);
			model.addAttribute("number", number);
			model.addAttribute("address", address);
			Optional<Product> items = productRepo.findById(Integer.parseInt(id));
			Product product = items.get();
			model.addAttribute("product", product);
			System.out.println(id);
			return "payment";
		} else {
			return "login";
		}
		

	}

	@GetMapping("/user/paymentCompleted/{id}")
	public String paymentCompleted(@PathVariable String id, ModelMap model, HttpSession session) {
		id = (id.substring(1, id.length() - 1));
		String name = (String) session.getAttribute("username");
		String number = (String) session.getAttribute("number");
		String address = (String) session.getAttribute("address");
		model.addAttribute("name", name);
		model.addAttribute("number", number);
		model.addAttribute("address", address);
		Optional<Product> items = productRepo.findById(Integer.parseInt(id));
		Product product = items.get();
		PurchaseReport_data data = new PurchaseReport_data();

		model.addAttribute("product", product);
		Optional<User> item = Userrepo.findByNumber(number);
		User user = item.get();
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd");
		LocalDateTime now = LocalDateTime.now();
		System.out.println(dtf.format(now));
		data.setUsername(user.getName());
		data.setUserNumber(user.getNumber());
		data.setProductName(product.getName());
		data.setCategory(product.getCategory());
		data.setDate(dtf.format(now));
		data.setPrice(product.getPrice());
		purchaseRepo.save(data);

		System.out.println(dtf.format(now));
		return "orderConformation";

	}

}
