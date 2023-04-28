package com.example.SportsShoe.controller;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.multipart.MultipartFile;

import com.example.SportsShoe.entities.Admin;
import com.example.SportsShoe.entities.Category;
import com.example.SportsShoe.entities.Product;
import com.example.SportsShoe.entities.PurchaseReport_data;
import com.example.SportsShoe.entities.User;
import com.example.SportsShoe.repo.AdminRepo;
import com.example.SportsShoe.repo.CategoryRepo;
import com.example.SportsShoe.repo.ProductRepo;
import com.example.SportsShoe.repo.PurchaseReportsRepo;
import com.example.SportsShoe.repo.UserRepository;

@Controller
public class AdminController {

	// Repositorys Initialization
	@Autowired
	private UserRepository Userrepo;
	@Autowired
	private ProductRepo productRepo;

	@Autowired
	private CategoryRepo categoryRepo;
	@Autowired
	private PurchaseReportsRepo purchaseRepo;
	
	@Autowired
	private AdminRepo adminRepo;

	// Admin Controllers
	@GetMapping("/admin/login")
	public String admin_login(HttpSession session) {
		if (session.getAttribute("username") == null) {

			return "admin_login";
		} else {
			return "admin_login";
		}
	}

	@GetMapping("/admin/logout")
	public String admin_logout(HttpSession session) {
		session.removeAttribute("username");
		return "admin_login";
	}

	@PostMapping("/admin/admin_login")
	public String adminLogin(HttpSession session, @ModelAttribute("username") String username,
			@ModelAttribute("password") String password, ModelMap model) {
		if (session.getAttribute("username") == null) {
			System.out.println(username + password);
			Optional<Admin> item=adminRepo.findByUsernameAndPassword(username, password);
			if (item.isPresent()) {
				session.setAttribute("username", "admin");
				session.setAttribute("password", password);
				return "admin_home";
			} else {
				return "redirect:/admin/login";
			}

		} else {
			return "admin_login";
		}

	}

	@GetMapping("/admin/products")
	public String products(ModelMap model, HttpSession session) {
		if (session.getAttribute("username") != null) {
			Iterable<Product> products = productRepo.findAll();
			model.addAttribute("products", products);
			System.out.println(products);

			return "products";

		} else {
			return "admin_login";
		}
	}

	@GetMapping("/admin/categories")
	public String categories(ModelMap model, HttpSession session) {
		if (session.getAttribute("username") != null) {

			Iterable<Category> cats = categoryRepo.findAll();
			model.addAttribute("categories", cats);
			return "categories";
		} else {
			return "admin_login";
		}
	}

	@GetMapping("/admin/Report")
	public String Report(HttpSession session,ModelMap model) {
		if (session.getAttribute("username") != null) {
			Iterable<PurchaseReport_data> items=purchaseRepo.findAll();
			model.addAttribute("reports", items);
			Iterable<Category> cats = categoryRepo.findAll();
			model.addAttribute("cate", cats);
			return "purchaseReport";

		} else {
			return "admin_login";
		}
	}

	@GetMapping("/admin/Users")
	public String Users(ModelMap model,HttpSession session) {
		if (session.getAttribute("username") != null) {

			Iterable<User> users_list = Userrepo.findAll();
			model.addAttribute("users", users_list);
			return "users";
		} else {
			return "admin_login";
		}
	}

	@GetMapping("/admin/addProduct")
	public String addProduct(ModelMap model) {
		model.addAttribute("products", true);
		Iterable<Category> categories_list = categoryRepo.findAll();
		model.addAttribute("cate", categories_list);
		model.addAttribute("create", true);
		return "addItem";
	}

	@GetMapping("/admin/addCategories")
	public String categorie(ModelMap model) {
		model.addAttribute("categorie", true);
		return "addItem";
	}

	@PostMapping("/admin/saveProduct")
	public String saveProduct(@ModelAttribute("name") String name, @ModelAttribute("category") String category,
			@ModelAttribute("description") String description, @RequestParam("image") MultipartFile multipartFile,
			@ModelAttribute("price") String price, ModelMap model) throws IOException {
		String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
		String uploadDir = "src/main/webapp/resources/static/imgs/";
		System.out.println("ASASAS " + fileName);
		FileUploadUtil.saveFile(uploadDir, fileName, multipartFile);
		String savingFilePath = "/images/static/imgs/" + fileName;

		Product product = new Product();
		product.setName(name);
		product.setCategory(category);
		product.setDescription(description);
		product.setImage(savingFilePath);
		product.setPrice(price);
		productRepo.save(product);

		return "products";
	}

	@PostMapping("/admin/UpdateProduct")
	public String UpdateProduct(@ModelAttribute("id") String id, @ModelAttribute("image") String fileName,
			@ModelAttribute("name") String name, @ModelAttribute("category") String category,
			@ModelAttribute("description") String description, @ModelAttribute("price") String price, ModelMap model)
			throws IOException {

		Product product = new Product();
		product.setId(Integer.parseInt(id));
		product.setName(name);
		product.setCategory(category);
		product.setDescription(description);
		product.setImage(fileName);
		product.setPrice(price);
		productRepo.save(product);

		return "products";
	}

	@PostMapping("/admin/saveCategory")
	public String saveCategory(@ModelAttribute("category") String name, ModelMap model) {
		Category category = new Category();
		category.setCategories(name);
		categoryRepo.save(category);
		return "categories";

	}

	@GetMapping("/admin/edit/{id}")
	public String EditProduct(@PathVariable String id, ModelMap model) {
		int id_ = Integer.parseInt(id.substring(1, id.length() - 1));
		System.out.println(id);

		Optional<Product> product = productRepo.findById(id_);
		model.addAttribute("product", product.get());
		System.out.println();
		model.addAttribute("edit", true);
		Iterable<Category> categories_list = categoryRepo.findAll();
		model.addAttribute("cate", categories_list);
		model.addAttribute("products", true);
		return "addItem";

	}

	@GetMapping("/admin/delete/{id}")
	public String deleteProduct(@PathVariable Integer id, ModelMap model) {
		productRepo.deleteById(id);
		Iterable<Product> products = productRepo.findAll();
		model.addAttribute("products", products);
		return "/products";

	}
	@PostMapping("/SearchUser")
	public String SearchUser(@ModelAttribute("name") String name,ModelMap model) {
		Iterable<User> items=(Iterable<User>) Userrepo.findByName(name);
//		if(items.) {
			model.addAttribute("users", items);
			return "users";
//		}
//		else {
//		model.addAttribute("msg", "No users Records Found");
//		return "users";
//		}

	}
	
	@PostMapping("/admin/filterData")
	public String filterData(@ModelAttribute("category") String category,@ModelAttribute("date") String date,ModelMap model) {
		Iterable<PurchaseReport_data> items= purchaseRepo.findByCategoryAndDate(category, date);

		model.addAttribute("reports", items);
		Iterable<Category> cats = categoryRepo.findAll();
		model.addAttribute("cate", cats);
		return "purchaseReport";


	}
	@GetMapping("/admin/chage_password")
	public String change_password(ModelMap model) {
		return "admin_changePassword";


	}
	
	@PostMapping("/admin/password_changed")
	public String password_changed(HttpSession session,@ModelAttribute("cpass") String cpass,@ModelAttribute("npass") String npass,ModelMap model) {
		System.out.println(cpass+npass);
		if(cpass.equals(session.getAttribute("password"))) {
			Admin item=new Admin();
			item.setId(1);
			item.setPassword(npass);
			item.setUsername("admin");
			adminRepo.save(item);
			model.addAttribute("msg","Password Changed Successfully");
			return "admin_changePassword";
		}
		else {
			model.addAttribute("msg","Current Password is not Valid");
			return "admin_changePassword";
		}


	}

}
